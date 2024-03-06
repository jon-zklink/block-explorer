import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Worker } from "../common/worker";
import waitFor from "../utils/waitFor";
import { TokenRepository,BalanceRepository,ReferralsRepository,TvlRepository } from "../repositories";
import {TokenOffChainDataProvider} from "../token/tokenOffChainData/tokenOffChainDataProvider.abstract";


@Injectable()
export class StatisticsTvlService extends Worker {
    private readonly statisticsTvlInterval: number;
    private readonly logger: Logger;

    public constructor(
        private readonly balanceRepository: BalanceRepository,
        private readonly tokenRepository: TokenRepository,
        private readonly referrerRepository: ReferralsRepository,
        private readonly tvlRepository: TvlRepository,
        private readonly tokenOffChainDataProvider: TokenOffChainDataProvider,
        configService: ConfigService
    ) {
        super();
        this.statisticsTvlInterval = configService.get<number>("points.pointsStatistsTvlInterval");
        this.logger = new Logger("Statistics");
    }

    protected async runProcess(): Promise<void> {
        let nextUpdateTimeout = this.statisticsTvlInterval;
        try {
            const lastUpdatedAt = await this.tvlRepository.getLastUpdatedAt();
            const now = new Date().getTime();
            const timeSinceLastUpdate = lastUpdatedAt ? now - lastUpdatedAt.getTime() : this.statisticsTvlInterval;
            nextUpdateTimeout =
                timeSinceLastUpdate >= this.statisticsTvlInterval
                    ? 0
                    : this.statisticsTvlInterval - timeSinceLastUpdate;

            if (!nextUpdateTimeout) {
                const tokens = await this.tokenRepository.getAllTokens();
                const tokenIds = tokens.map(t => t.priceId);
                let tokenPrices = await this.tokenOffChainDataProvider.getTokensCurrentPrice(tokenIds);
                const addresses = await this.balanceRepository.getAllAddresses();
                let addressTokenTvls = new Map();
                let addressTvls = new Map();
                for (const address of addresses) {
                    let balances = await this.balanceRepository.getAccountBalances(address);
                    let addressTokenBalances = [];
                    let addressTotalBalance = 0;
                    for (const token of tokens) {
                        let balancesOfToken = balances.find(b => b.tokenAddress == token.l2Address);
                        let tokenPrice = tokenPrices.find(p => p.priceId == token.priceId);
                        let usdBalance = Number(balancesOfToken.balance) * tokenPrice.usdPrice;
                        let addressTokenTvl =  {
                            address: address,
                            tokenAddress:token.l2Address,
                            balance: balancesOfToken,
                            tvl: usdBalance,
                        };
                        addressTokenBalances.push(addressTokenTvl);
                        addressTotalBalance += usdBalance;
                    }
                    let addressTvl = {
                        address: address,
                        tvl: addressTotalBalance,
                    };
                    addressTvls.set(address,addressTokenBalances);
                    addressTvls.set(address,addressTvl);
                }

                // calc group tvl
                let groupTvls = new Map();
                let groupIds = await this.referrerRepository.getAllGroups();
                for (const groupId of groupIds) {
                   let groupTvl = 0;
                   let members = await this.referrerRepository.getGroupMembers(groupId);
                   for (const member of members) {
                       groupTvl += addressTvls.get(member)
                   }
                   let ethPrice = tokenPrices.find(t => t.priceId === "ethereum");
                   groupTvl /= ethPrice.usdPrice;
                   groupTvls.set(groupId,groupTvl);
                }

                // calc referrals tvl
                let referralTvls = new Map();
                for (const address of addresses) {
                    let referralTvl = 0;
                    let referees = await this.referrerRepository.getReferralsByAddress(address, Number.MAX_SAFE_INTEGER);
                    for (const r of referees) {
                        referralTvl += addressTvls.get(r)
                    }
                    referralTvls.set(address, referralTvl);
                }

                const updatedAt = new Date();
                //todo: process in batch
                for (const [address,tokenTvl] of addressTokenTvls) {
                    await this.tvlRepository.upsertTokenTvls(tokenTvl);
                }

                for (const [address,tvl] of addressTvls) {
                    await this.tvlRepository.upsertAddressTvls(tvl);
                }

                for (const [groupId,tvl] of groupTvls) {
                    await this.tvlRepository.upsertGroupTvls(tvl);
                }

                nextUpdateTimeout = this.statisticsTvlInterval;
            }
        } catch (err) {
            this.logger.error({
                message: "Failed to statistics tvl",
                originalError: err,
            });
            nextUpdateTimeout = this.statisticsTvlInterval;
        }

        await waitFor(() => !this.currentProcessPromise, nextUpdateTimeout);
        if (!this.currentProcessPromise) {
            return;
        }

        return this.runProcess();
    }
}