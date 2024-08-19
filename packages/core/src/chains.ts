import { Chain, defineChain } from 'viem';
import {
  mainnet,
  goerli,
  baseSepolia,
  polygon,
  polygonAmoy,
  gnosis,
  gnosisChiado,
  avalanche,
  avalancheFuji,
  astar,
} from 'viem/chains';

// Hardhat (local) network
const hardhat = defineChain({
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545/'],
      webSocket: ['http://127.0.0.1:8545/'],
    },
  },
});

// TODO: Support Shiden network
export const SUPPORTED_CHAINS: Record<string, Record<string, Chain>> = {
  local: {
    mainnet: hardhat,
  },
  ethereum: {
    mainnet: mainnet,
    goerli: goerli,
    sepolia: baseSepolia,
  },
  polygon: {
    mainnet: polygon,
    amoy: polygonAmoy,
  },
  gnosis: {
    mainnet: gnosis,
    chiado: gnosisChiado,
  },
  avalanche: {
    mainnet: avalanche,
    fuji: avalancheFuji,
  },
  astar: {
    mainnet: astar,
  },
};

export function getSupportedChainNames(): string[] {
  return Object.keys(SUPPORTED_CHAINS);
}

export function isValidChainName(params: { chainName: string }): boolean {
  if (Object.keys(SUPPORTED_CHAINS).some((e) => e === params.chainName)) {
    return true;
  }
  return false;
}

export function getSupportedNetworkNames(params: { chainName: string }): string[] {
  return Object.keys(SUPPORTED_CHAINS[params.chainName]);
}

export function isValidNetworkName(params: { chainName: string; networkName: string }): boolean {
  if (
    params.chainName in SUPPORTED_CHAINS &&
    Object.keys(SUPPORTED_CHAINS[params.chainName]).some((e) => e === params.networkName)
  ) {
    return true;
  }
  return false;
}
