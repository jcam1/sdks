import '@nomicfoundation/hardhat-ignition';
import '@nomicfoundation/hardhat-ignition-viem';
import type { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.11',
        settings: {
          optimizer: {
            enabled: true,
            runs: 3000,
          },
        },
      },
      {
        version: '0.4.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 3000,
          },
        },
      },
    ],
  },
  paths: {
    root: './',
    sources: './JPYCv2/contracts',
    tests: './JPYCv2/test',
    artifacts: './artifacts',
    cache: './cache',
  },
};

export default config;
