import { Module, Logger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { HttpModule, HttpService } from "@nestjs/axios";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import config from "./config";
import { HealthModule } from "./health/health.module";
import { AppService } from "./app.service";
import { BlockchainService } from "./blockchain";
import { BlocksRevertService } from "./blocksRevert";
import { BatchService } from "./batch";
import { BlockProcessor, BlockWatcher, BlockService } from "./block";
import { TransactionProcessor } from "./transaction";
import { BalanceService, BalancesCleanerService } from "./balance";
import { TokenService } from "./token/token.service";
import { TokenOffChainDataProvider } from "./token/tokenOffChainData/tokenOffChainDataProvider.abstract";
import { CoingeckoTokenOffChainDataProvider } from "./token/tokenOffChainData/providers/coingecko/coingeckoTokenOffChainDataProvider";
import { PortalsFiTokenOffChainDataProvider } from "./token/tokenOffChainData/providers/portalsFi/portalsFiTokenOffChainDataProvider";
import { TokenOffChainDataSaverService } from "./token/tokenOffChainData/tokenOffChainDataSaver.service";
import { CounterModule } from "./counter/counter.module";
import {
  BatchRepository,
  BlockRepository,
  TransactionRepository,
  AddressTransactionRepository,
  TransactionReceiptRepository,
  TokenRepository,
  AddressRepository,
  TransferRepository,
  AddressTransferRepository,
  LogRepository,
  BalanceRepository,
  PointsRepository,
  PointsHistoryRepository,
  ReferralsRepository,
  TvlRepository,
} from "./repositories";
import {
  Batch,
  Block,
  Transaction,
  AddressTransaction,
  TransactionReceipt,
  Log,
  Token,
  Address,
  Transfer,
  AddressTransfer,
  Balance,
  Point,
  PointsHistory,
  Referral,
  BlockAddressPoint,
  AddressActive,
  Invite,
} from "./entities";
import { typeOrmModuleOptions, typeOrmReferModuleOptions } from "./typeorm.config";
import { JsonRpcProviderModule } from "./rpcProvider/jsonRpcProvider.module";
import { RetryDelayProvider } from "./retryDelay.provider";
import { MetricsModule } from "./metrics";
import { DbMetricsService } from "./dbMetrics.service";
import { UnitOfWorkModule } from "./unitOfWork";
import { DataFetcherService } from "./dataFetcher/dataFetcher.service";
import { PointService } from "./points/point.service";
import { BlockTokenPriceRepository } from "./repositories/blockTokenPrice.repository";
import { BlockTokenPrice } from "./entities/blockTokenPrice.entity";
import { BlockAddressPointRepository } from "./repositories/blockAddressPoint.repository";
import { AddressActiveRepository } from "./repositories/addressActive.repository";
import { InviteRepository } from "./repositories/invite.repository";
import { ReferrerRepository } from "./repositories/referrer.repository";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrometheusModule.register(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        return {
          ...typeOrmModuleOptions,
          autoLoadEntities: true,
          retryDelay: 3000, // to cover 3 minute DB failover window
          retryAttempts: 70, // try to reconnect for 3.5 minutes,
        };
      },
    }),
    TypeOrmModule.forFeature([
      Batch,
      Block,
      Transaction,
      AddressTransaction,
      TransactionReceipt,
      Log,
      Token,
      Address,
      AddressTransfer,
      Transfer,
      Balance,
      Point,
      PointsHistory,
      BlockTokenPrice,
      BlockAddressPoint,
      AddressActive,
    ]),
    TypeOrmModule.forRootAsync({
      name: "refer",
      imports: [ConfigModule],
      useFactory: () => {
        return {
          ...typeOrmReferModuleOptions,
          autoLoadEntities: true,
          retryDelay: 3000, // to cover 3 minute DB failover window
          retryAttempts: 70, // try to reconnect for 3.5 minutes,
        };
      },
    }),
    TypeOrmModule.forFeature([Invite, Referral], "refer"),
    EventEmitterModule.forRoot(),
    JsonRpcProviderModule.forRoot(),
    MetricsModule,
    UnitOfWorkModule,
    CounterModule,
    HealthModule,
    HttpModule,
  ],
  providers: [
    AppService,
    BlockchainService,
    DataFetcherService,
    BalanceService,
    BalancesCleanerService,
    TokenService,
    {
      provide: TokenOffChainDataProvider,
      useFactory: (configService: ConfigService, httpService: HttpService) => {
        const selectedProvider = configService.get<string>("tokens.selectedTokenOffChainDataProvider");
        switch (selectedProvider) {
          case "portalsFi":
            return new PortalsFiTokenOffChainDataProvider(httpService);
          default:
            return new CoingeckoTokenOffChainDataProvider(configService, httpService);
        }
      },
      inject: [ConfigService, HttpService],
    },
    TokenOffChainDataSaverService,
    BatchRepository,
    BlockRepository,
    TransactionRepository,
    AddressTransactionRepository,
    TransactionReceiptRepository,
    TokenRepository,
    AddressRepository,
    TransferRepository,
    AddressTransferRepository,
    BalanceRepository,
    LogRepository,
    PointsRepository,
    PointsHistoryRepository,
    TvlRepository,
    BlocksRevertService,
    BatchService,
    BlockProcessor,
    TransactionProcessor,
    BlockWatcher,
    BlockService,
    Logger,
    RetryDelayProvider,
    DbMetricsService,
    PointService,
    BlockTokenPriceRepository,
    BlockAddressPointRepository,
    AddressActiveRepository,
    InviteRepository,
    ReferrerRepository,
  ],
})
export class AppModule {}
