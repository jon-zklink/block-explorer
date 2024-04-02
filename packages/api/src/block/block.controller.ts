import {Controller, Get, NotFoundException, Param, Query} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiExcludeController,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";
import {Pagination} from "nestjs-typeorm-paginate";
import {buildDateFilter} from "../common/utils";
import {ParseLimitedIntPipe} from "../common/pipes/parseLimitedInt.pipe";
import {ListFiltersDto, PagingOptionsDto} from "../common/dtos";
import {ApiListPageOkResponse} from "../common/decorators/apiListPageOkResponse";
import {BlockService} from "./block.service";
import {BlockDto} from "./block.dto";
import {BlockDetailsDto} from "./blockDetails.dto";
import {swagger} from "../config/featureFlags";
import {TVLHistory} from "./tvlHistory.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TVLHistoryDto} from "./TVLHistory.dto";
import {LRUCache} from "lru-cache";
import {PriceHistory} from "./priceHistory.entity";
import {ExceptionResponse, NOT_FOUND_EXCEPTION, PriceHistoryService} from "./priceHistory.service";

const options = {
  // how long to live in ms
  ttl: 1000 * 10,
  // return stale items before removing from cache?
  allowStale: false,
  ttlAutopurge: true,
};

const cache = new LRUCache(options);
const HISTORY_TVL_CACHE_KEY = "history-tvl-cache";
const HISTORY_USW_CACHE_KEY = "history-usw-cache"

const entityName = "blocks";

@ApiTags("Block BFF")
@ApiExcludeController(!swagger.bffEnabled)
@Controller(entityName)
export class BlockController {
  constructor(
    private readonly blockService: BlockService,
    private readonly priceHistoryService:PriceHistoryService,
    @InjectRepository(TVLHistory)
    private readonly tvlHistoryRepository: Repository<TVLHistory>,
  ) {}

  @Get("/total/tvl")
  @ApiOperation({ summary: "Get total tvl" })
  public async getTotalTvl(): Promise<TVLHistoryDto[]> {
    const tvls = cache.get(HISTORY_TVL_CACHE_KEY) as TVLHistoryDto[];
    if (tvls) {
      return tvls;
    }
    const latest: TVLHistory = await this.tvlHistoryRepository.findOne({
      // can't miss where
      where: {},
      order: {
        id: "desc",
      },
    });
    if (!latest){
      return [];
    }

    const tvlHistorys: TVLHistory[] = await this.tvlHistoryRepository.query(
      'select DISTINCT on (date(timestamp))  u.*  from "tvlHistory" u order by date(timestamp),id asc'
    );

    let history = tvlHistorys.map((tvlHistory) => {
      return {
        id: tvlHistory.id,
        tvl: tvlHistory.tvl.toString(),
        timestamp: tvlHistory.timestamp,
      };
    });
      history.push({
        id: latest.id,
        tvl: latest.tvl.toString(),
        timestamp: latest.timestamp,
      });
    history.reverse();
    cache.set(HISTORY_TVL_CACHE_KEY, history);
    return history;
  }
  @Get("/total/uaw")
  @ApiOperation({ summary: "Get total usw" })
  public async getTotalUsw(): Promise<TVLHistoryDto[]> {
    const uaws = cache.get(HISTORY_USW_CACHE_KEY) as TVLHistoryDto[];
    if (uaws) {
      return uaws;
    }
    const latest: TVLHistory = await this.tvlHistoryRepository.findOne({
      // can't miss where
      where: {},
      order: {
        id: "desc",
      },
    });
    if (!latest){
      return [];
    }
    const uawHistorys: TVLHistory[] = await this.tvlHistoryRepository.query(
        'select DISTINCT on (date(timestamp))  u.*  from "tvlHistory" u order by date(timestamp),id asc'
    );

    let history = uawHistorys.map((tvlHistory) => {
      return {
        id: tvlHistory.id,
        tvl: tvlHistory.tvl.toString(),
        timestamp: tvlHistory.timestamp,
        uaw: tvlHistory.uaw.toString(),
      };
    });
      history.push({
        id: latest.id,
        tvl: latest.tvl.toString(),
        timestamp: latest.timestamp,
        uaw: latest.uaw.toString(),
      });
    history.reverse();
    cache.set(HISTORY_TVL_CACHE_KEY, history);
    return history;
  }
  @Get("/various/prices")
  @ApiOperation({ summary: "Get various prices" })
  public async getVariousPrices(
      @Query('curTime') curTime : string,
      @Query('l2Address') l2Address : string,
  ): Promise<PriceHistory | ExceptionResponse> {
    const curDate = new Date(curTime);
    const priceHistory = await this.priceHistoryService.foundCurTimePriceHistory({
      l2Address,
      dateTime: curDate,
    });
    if( priceHistory === undefined || priceHistory === null){
      return NOT_FOUND_EXCEPTION;
    }
    return priceHistory;
  }

  @Get("/various/range-prices")
  @ApiOperation({ summary: "Get various range prices" })
  public async getVariousRangePrices(
      @Query('startTime') startTime: string,
      @Query('endTime') endTime: string,
      @Query('l2Address') l2Address: string,
  ): Promise<PriceHistory[]> {
    const dateStartTime = new Date(startTime);
    const dateEndTime = new Date(endTime);
    return this.priceHistoryService.foundRangePriceHistory({l2Address, dateStartTime, dateEndTime});
  }

  @Get("")
  @ApiListPageOkResponse(BlockDto, { description: "Successfully returned blocks list" })
  @ApiBadRequestResponse({ description: "Query params are not valid or out of range" })
  public async getBlocks(
    @Query() listFilterOptions: ListFiltersDto,
    @Query() pagingOptions: PagingOptionsDto
  ): Promise<Pagination<BlockDto>> {
    const filterCriteria = buildDateFilter(listFilterOptions.fromDate, listFilterOptions.toDate);
    return await this.blockService.findAll(filterCriteria, {
      filterOptions: listFilterOptions,
      ...pagingOptions,
      route: entityName,
      canUseNumberFilterAsOffset: true,
    });
  }

  @Get(":blockNumber")
  @ApiParam({
    name: "blockNumber",
    type: "integer",
    example: "1",
    description: "Block number",
  })
  @ApiOkResponse({ description: "Block was returned successfully", type: BlockDetailsDto })
  @ApiBadRequestResponse({ description: "Block number is invalid" })
  @ApiNotFoundResponse({ description: "Block with the specified number does not exist" })
  public async getBlock(
    @Param("blockNumber", new ParseLimitedIntPipe({ min: 0 })) blockNumber: number
  ): Promise<BlockDetailsDto> {
    const block = await this.blockService.findOne(blockNumber);
    if (!block) {
      throw new NotFoundException();
    }
    return block;
  }
}
