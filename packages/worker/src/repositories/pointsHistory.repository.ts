import { Injectable } from "@nestjs/common";
import { FindOptionsWhere, FindOptionsSelect, FindOptionsRelations } from "typeorm";
import { UnitOfWork } from "../unitOfWork";
import {PointsHistory} from "../entities";

@Injectable()
export class PointsHistoryRepository {
  public constructor(private readonly unitOfWork: UnitOfWork) {}

  public async add(address: string,blockNumber: number,stakePoint: number,refPoint: number,refNumber:number): Promise<void> {
    const transactionManager = this.unitOfWork.getTransactionManager();
    await transactionManager.insert<PointsHistory>(PointsHistory, {
      address,blockNumber,stakePoint,refPoint,refNumber
    });
  }
}