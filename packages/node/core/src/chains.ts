export type ChainId = number;

// Ethereum
type EthereumChainName = 'MAINNET' | 'GOERLI' | 'SEPOLIA';
export const EthereumChains: Record<EthereumChainName, ChainId> = {
  MAINNET: 1,
  GOERLI: 5,
  SEPOLIA: 11155111,
}

// Polygon
type PolygonChainName = 'MAINNET' | 'AMOY';
export const PolygonChains: Record<PolygonChainName, ChainId> = {
  MAINNET: 137,
  AMOY: 80002,
}

// Gnosis
type GnosisChainName = 'MAINNET' | 'CHIADO';
export const GnosisChains: Record<GnosisChainName, ChainId> = {
  MAINNET: 100,
  CHIADO: 10200,
}

// Avalanche
type AvalancheChainName = 'MAINNET' | 'FUJI';
export const AvalancheChains: Record<AvalancheChainName, ChainId> = {
  MAINNET: 43114,
  FUJI: 43113,
}

// Shiden
type ShidenChainName = 'MAINNET';
export const ShidenChains: Record<ShidenChainName, ChainId> = {
  MAINNET: 336,
}

// Astar
type AstarChainName = 'MAINNET';
export const AstarChains: Record<AstarChainName, ChainId> = {
  MAINNET: 592,
}

export const SUPPORTED_CHAIN_IDS = [
  ...Object.values(EthereumChains),
  ...Object.values(PolygonChains),
  ...Object.values(GnosisChains),
  ...Object.values(AvalancheChains),
  ...Object.values(ShidenChains),
  ...Object.values(AstarChains),
];
