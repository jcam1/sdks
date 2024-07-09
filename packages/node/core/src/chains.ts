enum Ethereum {
  MAINNET = 1,
  GOERLI = 5,
  SEPOLIA = 11155111,
}

enum Polygon {
  MAINNET = 137,
  AMOY = 80002,
}

enum Gnosis {
  MAINNET = 100,
  CHIADO = 10200,
}

enum Avalanche {
  MAINNET = 43114,
  FUJI = 43113,
}

enum Shiden {
  MAINNET = 336,
}

enum Astar {
  MAINNET = 592,
}

export const CHAIN_IDS = {
  Ethereum,
  Polygon,
  Gnosis,
  Avalanche,
  Shiden,
  Astar,
} as const;
