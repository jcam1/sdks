export type Address = `0x${string}`;
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
