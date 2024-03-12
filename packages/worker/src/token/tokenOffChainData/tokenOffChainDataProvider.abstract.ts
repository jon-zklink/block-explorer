import { Token } from "../token.service";

export interface ITokenOffChainData {
  l1Address?: string;
  l2Address?: string;
  liquidity?: number;
  usdPrice?: number;
  iconURL?: string;
  priceId?: string;
}

export interface ITokenCurrentPrice {
  priceId?: string;
  usdPrice?: number;
}

export abstract class TokenOffChainDataProvider {
  abstract getTokensOffChainData: (supportTokens: Token[]) => Promise<ITokenOffChainData[]>;
  abstract getTokenPriceByBlock: (tokenId: string, blockTs: number) => Promise<number>;
  abstract getTokensCurrentPrice: (tokens: string[]) => Promise<ITokenCurrentPrice[]>;
}
