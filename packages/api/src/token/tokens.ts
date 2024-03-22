// Version 20240317-1448
// Add Arbitrum rsETH, please note that cg does not have Arbitrum rsETH price

export default [
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x0000000000000000000000000000000000000000",
        l2Address: "0x000000000000000000000000000000000000800a",
      },
    ],
    symbol: "ETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        l2Address: "0xEbc45Ef3B6D7E31573DAa9BE81825624725939f9",
      },
      {
        chain: "Arbitrum",
        l1Address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
        l2Address: "0x3DabBd8A31a411E85f628278d6601fCeD82f6844",
      },
      {
        chain: "zkSync",
        l1Address: "0xBBeB516fb02a01611cBBE0453Fe3c580D7281011",
        l2Address: "0x60D49aAb4c150A172fefD4B5fFCc0BE41E655c18",
      },
      {
        chain: "Linea",
        l1Address: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
        l2Address: "0xbECe765BdaDba05e3B639E6925657D265f94736C",
      },
      {
        chain: "Manta",
        l1Address: "0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6",
        l2Address: "0xA5FDC26E9Aff962c4C5645d43DdF27B8B630dB03",
      },
      {
        chain: "Mantle",
        l1Address: "0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2",
        l2Address: "0x84e66eeB38C57A4C9548198F10f738bAe9f811ca",
      },
    ],
    symbol: "wBTC",
    decimals: 8,
    cgPriceId: "bitcoin",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Mantle",
        l1Address: "0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111",
        l2Address: "0xc0eF13025202901aAD1659E048647659FD0fDa7A",
      },
    ],
    symbol: "WETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        l2Address: "0x0ace5E8e1Be0d3Df778f639d79fa8231b376b9F1",
      },
      {
        chain: "Arbitrum",
        l1Address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        l2Address: "0x012726F9f458a63f86055b24E67BA0aa26505028",
      },
      {
        chain: "zkSync",
        l1Address: "0x493257fD37EDB34451f62EDf8D2a0C418852bA4C",
        l2Address: "0x8Fed4307f02eCcbd9EC88C84081Ba5eDCAcD0964",
      },
      {
        chain: "Linea",
        l1Address: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
        l2Address: "0xAF5852CA4Fc29264226Ed0c396dE30C945589D6D",
      },
      {
        chain: "Manta",
        l1Address: "0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f",
        l2Address: "0x8a87de262e7C0EfA4Cb59eC2a8e60494edD59e8f",
      },
      {
        chain: "Mantle",
        l1Address: "0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE",
        l2Address: "0x7356804be101E88C260e074a5b34fC0E0D2d569b",
      },
    ],
    symbol: "USDT",
    decimals: 6,
    cgPriceId: "tether",
    type: "Stablecoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        l2Address: "0x220B1C622c8c169a9174f42CEA89a9E2f83B63F6",
      },
      {
        chain: "Arbitrum",
        l1Address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
        l2Address: "0x7581469cb53E786F39ff26E8aF6Fd750213dAcEd",
      },
      {
        chain: "zkSync",
        l1Address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
        l2Address: "0x60CF0D62329699A23E988d500A7E40Faae4a3E4D",
      },
      {
        chain: "Linea",
        l1Address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
        l2Address: "0xfFE944D301BB97b1271f78c7d0E8C930b75DC51B",
      },
      {
        chain: "Manta",
        l1Address: "0xb73603C5d87fA094B7314C74ACE2e64D165016fb",
        l2Address: "0xA8A59Bb7fe9fE2364ae39a3B48E219fAB096c852",
      },
      {
        chain: "Mantle",
        l1Address: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
        l2Address: "0x4E340B4Ea46ca1D1CE6e2dF7b21e649e2921521f",
      },
    ],
    decimals: 6,
    symbol: "USDC",
    cgPriceId: "usd-coin",
    type: "Stablecoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
        l2Address: "0x9627Cd870e028F0f17AC50D2509cAbaCB2dD8670",
      },
    ],
    symbol: "USDe",
    decimals: 18,
    cgPriceId: "ethena-usde",
    type: "Stablecoin",
    yieldType: ["NOVA Points", "Shard"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x9d39a5de30e57443bff2a8307a4256c8797a3497",
        l2Address: "0x9D179bD6AE89a3089E169f164D14A5fcd622c0a5",
      },
    ],
    symbol: "sUSDe",
    decimals: 18,
    cgPriceId: "ethena-staked-usde",
    type: "Stablecoin",
    yieldType: ["NOVA Points", "Shard"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
        l2Address: "0xC3573499edDFEfAF07482063e1CfCe6dCCbAADC2",
      },
      {
        chain: "Arbitrum",
        l1Address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
        l2Address: "0xcb70533c9635060275F1A97539dda2E3f8bFac42",
      },
    ],
    symbol: "ARB",
    decimals: 18,
    cgPriceId: "arbitrum",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x3c3a81e81dc49A522A592e7622A7E711c06bf354",
        l2Address: "0xF01894fA4f621669Ad958e6EC5485729Ff7492Ed",
      },
    ],
    symbol: "MNT",
    decimals: 18,
    cgPriceId: "mantle",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Mantle",
        l1Address: "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
        l2Address: "0x86339D32837345974609C66c52884FcB26a76b8C",
      },
    ],
    symbol: "wMNT",
    decimals: 18,
    cgPriceId: "mantle",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Manta",
        l1Address: "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5",
        l2Address: "0xF5d3953a33F78E0412A8988FD77B4920AA968B0b",
      },
    ],
    symbol: "MANTA",
    decimals: 18,
    cgPriceId: "manta-network",
    type: "Native",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
      {
        multiplier: 1.8,
        timestamp: 1711015200,
      },
      {
        multiplier: 1.5,
        timestamp: 1712224800,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812",
        l2Address: "0xABDe449B982b0dd5dF6a212950FAdC0a7134bABB",
      },
      {
        chain: "Manta",
        l1Address: "0xbdAd407F77f44F7Da6684B416b1951ECa461FB07",
        l2Address: "0x829a939ee105Cc3607428c237E463fEb051E9780",
      },
    ],
    symbol: "wUSDm",
    decimals: 18,
    cgPriceId: "wrapped-usdm",
    type: "Stablecoin",
    yieldType: ["NOVA Points", "Native Yield"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
      {
        multiplier: 1.8,
        timestamp: 1711015200,
      },
      {
        multiplier: 1.5,
        timestamp: 1712224800,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x7122985656e38BDC0302Db86685bb972b145bD3C",
        l2Address: "0xEA45e49428EB47E4f6F052148B23E8feC61d4Cad",
      },
      {
        chain: "Manta",
        l1Address: "0xEc901DA9c68E90798BbBb74c11406A32A70652C3",
        l2Address: "0xDeEC33dc735Baf36b473598C33BCD077A0f32049",
      },
    ],
    symbol: "Stone",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LST",
    yieldType: ["NOVA Points", "Native Yield"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
      {
        multiplier: 1.8,
        timestamp: 1711015200,
      },
      {
        multiplier: 1.5,
        timestamp: 1712224800,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xf951E335afb289353dc249e82926178EaC7DEd78",
        l2Address: "0x78aDF06756c5F3368c003FFbF675Fc03a938a145",
      },
    ],
    symbol: "swETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LST",
    yieldType: ["NOVA Points", "Native Yield", "Pearls"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa",
        l2Address: "0xaeD36B09465e0f9b2f4AFe8B37FF17107e190e06",
      },
      {
        chain: "Mantle",
        l1Address: "0xcDA86A272531e8640cD7F1a92c01839911B90bb0",
        l2Address: "0xF9962b11eF143b14543C31e4c0EA20585f1A49eF",
      },
    ],
    symbol: "mETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LST",
    yieldType: ["NOVA Points", "Native Yield"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        l2Address: "0xfe8C940B936E3520e314574418585687c3BbAA12",
      },
      {
        chain: "Arbitrum",
        l1Address: "0x5979D7b546E38E414F7E9822514be443A4800529",
        l2Address: "0x56F4aE3C1FB9293bC5862D1221b1C5b808Fb35EA",
      },
      {
        chain: "Linea",
        l1Address: "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F",
        l2Address: "0x31ff1E8ee3B71f05f12BE3705C195aC88085b9Ac",
      },
    ],
    symbol: "wstETH",
    decimals: 18,
    cgPriceId: "wrapped-steth",
    type: "LST",
    yieldType: ["NOVA Points", "Native Yield"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xC6572019548dfeBA782bA5a2093C836626C7789A",
        l2Address: "0x93D79E21a68f66D79449fbF4fB4Ed025ABAcc2F6",
      },
    ],
    symbol: "nETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LST",
    yieldType: ["NOVA Points", "Native Yield"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xF1376bceF0f78459C0Ed0ba5ddce976F1ddF51F4",
        l2Address: "0x011E385631488F3318F0C5541A343306626200D7",
      },
    ],
    symbol: "uniETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LST",
    yieldType: ["NOVA Points", "Native Yield", "EL Points", "Bedrock Diamonds"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x14778860E937f509e651192a90589dE711Fb88a9",
        l2Address: "0x9B370Be9cC8cf5190Ec7a22da9B1aE3B95b37A60",
      },
    ],
    symbol: "CYBER",
    decimals: 18,
    cgPriceId: "cyberconnect",
    type: "Altcoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x5fAa989Af96Af85384b8a938c2EdE4A7378D9875",
        l2Address: "0x56BCb12b524Add1e89BEcA721CcfB6Cf47E30638",
      },
    ],
    symbol: "GAL",
    decimals: 18,
    cgPriceId: "project-galaxy",
    type: "Altcoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
        l2Address: "0xeC393a2939C47C58a695C0A7927295458e8054EE",
      },
    ],
    symbol: "BEL",
    decimals: 18,
    cgPriceId: "bella-protocol",
    type: "Altcoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a",
        l2Address: "0x380dD3344288bD6EFD7c3597b2B6114b722A0e65",
      },
    ],
    symbol: "ARPA",
    decimals: 18,
    cgPriceId: "arpa",
    type: "Altcoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 1.5,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
        l2Address: "0x35D5f1b41319e0ebb5a10e55C3BD23f121072da8",
      },
      {
        chain: "Arbitrum",
        l1Address: "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe",
        l2Address: "0xE227155217513f1ACaA2849A872ab933cF2d6a9A",
      },
    ],
    symbol: "weETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LRT",
    yieldType: ["NOVA Points", "Native Yield", "EL Points", "Loyalty Points"],
    multipliers: [
      {
        multiplier: 1,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
        l2Address: "0x186c0c42C617f1Ce65C4f7DF31842eD7C5fD8260",
      },
      {
        chain: "Arbitrum",
        l1Address: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
        l2Address: "0x4A2da287deB06163fB4D77c52901683d69bD06f4",
      },
    ],
    symbol: "rsETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LRT",
    yieldType: ["NOVA Points", "Native Yield", "EL Points", "Kelp Miles"],
    multipliers: [
      {
        multiplier: 1,
        timestamp: 0,
      },
      {
        multiplier: 1.2,
        timestamp: 1711015200,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
        l2Address: "0xdA7Fa837112511F6E353091D7e388A4c45Ce7D6C",
      },
      {
        chain: "Arbitrum",
        l1Address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
        l2Address: "0x3FDB1939daB8e2d4F7a04212F142469Cd52d6402",
      },
      {
        chain: "Linea",
        l1Address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
        l2Address: "0x8FEe71Ab3Ffd6F8Aec8Cd2707Da20f4Da2bf583D",
      },
      {
        chain: "Blast",
        l1Address: "0x2416092f143378750bb29b79eD961ab195CcEea5",
        l2Address: "0x8eDFa0151dF300C2b14bba9dA9f07A805565009d",
      },
    ],
    symbol: "ezETH",
    decimals: 18,
    type: "LRT",
    cgPriceId: "ethereum",
    yieldType: ["NOVA Points", "Native Yield", "EL Points", "ezPoints"],
    multipliers: [
      {
        multiplier: 1,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xD9A442856C234a39a81a089C06451EBAa4306a72",
        l2Address: "0x1B49eCf1A8323Db4abf48b2F5EFaA33F7DdAB3FC",
      },
    ],
    symbol: "pufETH",
    decimals: 18,
    cgPriceId: "ethereum",
    type: "LRT",
    yieldType: ["NOVA Points", "Native Yield", "EL Points", "Puffer Points"],
    multipliers: [
      {
        multiplier: 1,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
        l2Address: "0x2957AbFF50A6FF88336599Cc9E9E0c664F729f40",
      },
    ],
    decimals: 18,
    symbol: "rswETH",
    cgPriceId: "ethereum",
    type: "LRT",
    yieldType: ["NOVA Points", "Native Yield", "Swell Points", "Pearls"],
    multipliers: [
      {
        multiplier: 1,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        l2Address: "0x075893f535b9DDE1D28492EA13085f27ecEf6320",
      },
      {
        chain: "Arbitrum",
        l1Address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
        l2Address: "0x087e4D2D60da117835F681965Ea1CCC189e51599",
      },
    ],
    decimals: 18,
    symbol: "DAI",
    cgPriceId: "dai",
    type: "Stablecoin",
    yieldType: ["NOVA Points"],
    multipliers: [
      {
        multiplier: 2,
        timestamp: 0,
      },
    ],
  },
  {
    address: [
      {
        chain: "Ethereum",
        l1Address: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
        l2Address: "0xa0728b0BC498942Fb042C26C7EbBB44Be654A53C",
      },
    ],
    decimals: 18,
    symbol: "sDAI",
    cgPriceId: "savings-dai",
    type: "RWA",
    yieldType: ["NOVA Points", "Native Yield"],
    multipliers: [
      {
        multiplier: 1,
        timestamp: 0,
      },
    ],
  },
];
