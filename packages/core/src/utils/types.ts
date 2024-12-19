// TODO: enforce length of strings (20 bytes = 40 hex digits)
export type Address = `0x${string}`;

// TODO: enforce length of strings (32 bytes = 64 hex digits)
export type Bytes32 = `0x${string}`;

export type Endpoint = string;

export type ChainName =
  | 'local'
  | 'ethereum'
  | 'polygon'
  | 'gnosis'
  | 'avalanche'
  | 'astar'
  | 'shiden';

export type NetworkName = 'mainnet' | 'goerli' | 'sepolia' | 'amoy' | 'chiado' | 'fuji';
