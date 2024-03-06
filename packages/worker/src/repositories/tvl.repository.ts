import { Injectable } from "@nestjs/common";
import { FindOptionsWhere, FindOptionsSelect, FindOptionsRelations } from "typeorm";
import { UnitOfWork } from "../unitOfWork";
import {PointsHistory} from "../entities";
import {AddressTokenTvl} from "../entities/addressTokenTvl.entity";
import {AddressTvl} from "../entities/addressTvl.entity";
import {GroupTvl} from "../entities/groupTvl.entity";

@Injectable()
export class TvlRepository {
  public constructor(private readonly unitOfWork: UnitOfWork) {}

  public async upsertTokenTvls(tvl:AddressTokenTvl): Promise<void> {
    const transactionManager = this.unitOfWork.getTransactionManager();
    await transactionManager.query(`INSERT INTO "addressTokenTvls" 
    (address,"tokenAddress",balance,tvl) VALUES ($1,$2,$3,$4) ON CONFLICT(address,tokenAddress) 
    DO UPDATE SET balance = $3,tvl = $4`, [
      tvl.address,tvl.tokenAddress,tvl.balance,tvl.tvl
    ]);
  }

  public async upsertAddressTvls(tvl: AddressTvl ): Promise<void> {
    const transactionManager = this.unitOfWork.getTransactionManager();
    await transactionManager.query(`INSERT INTO "addressTvls" (address,tvl,"referralTvl") VALUES ($1,$2,$3)
    ON CONFLICT(address) DO UPDATE SET tvl = $2,"referralTvl = $3"`, [tvl.address,tvl.tvl,tvl.referralTvl]);
  }

  public async upsertGroupTvls(tvl: GroupTvl): Promise<void> {
    const transactionManager = this.unitOfWork.getTransactionManager();
    await transactionManager.query(`INSERT INTO "groupTvls" ("groupId",tvl) VALUES ($1,$2)
    ON CONFLICT("groupId") DO UPDATE SET tvl = $2`, [tvl.groupId,tvl.tvl]);
  }
}
