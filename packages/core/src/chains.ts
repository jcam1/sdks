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
