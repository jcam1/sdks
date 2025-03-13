# JPYC Core SDK

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![build](https://github.com/jcam1/sdks/actions/workflows/check.yml/badge.svg)
[![npm version](https://badge.fury.io/js/@jpyc%2Fsdk-core.svg)](https://badge.fury.io/js/@jpyc%2Fsdk-core)

JPYC core SDK implements NodeJS interfaces to interact with [JPYCv2 contracts](https://github.com/jcam1/JPYCv2) on different chains. Currently, we're supporting Ethereum, Polygon, Gnosis, Avalanche, Astar and Shiden.

## 💡 Usage

Please follow the following steps to configure SDK.

### 1. Installation

Install NPM package.

```sh
# yarn
$ yarn add @jpyc/sdk-core
```

```sh
# npm
$ npm i @jpyc/sdk-core
```

### 2. Environment Variables

Some data, such as configuration variables (e.g., chain name) or sensitive data (e.g., private key), are embedded as environment variables. You need to set the following environment variables.

|              Variable | Description & Instructions                                                                                                        |
| --------------------: | :-------------------------------------------------------------------------------------------------------------------------------- |
|             `SDK_ENV` | SDK environment. Set to `local` for local environment or any other sensible name for production environment.                      |
|          `CHAIN_NAME` | Chain name. Set to one of the following\: `local`, `ethereum`, `polygon`, `gnosis`, `avalanche`, `astar` or `shiden`.             |
|        `NETWORK_NAME` | Network name within the specified chain. Set to one of the following\: `mainnet`, `goerli`, `sepolia`, `amoy`, `chiado` or `fuji` |
|        `RPC_ENDPOINT` | RPC endpoint to send transactions.                                                                                                |
|         `PRIVATE_KEY` | Private key of an account.                                                                                                        |
| `LOCAL_PROXY_ADDRESS` | Proxy contract address in local environment.                                                                                      |

### 3. SDK Instantiation

Initialize an SDK instance.

```ts
import {
  ChainName,
  Endpoint,
  IJPYC,
  ISdkClient,
  JPYC,
  NetworkName,
  SdkClient,
} from '@jpyc/sdk-core';

// 1. Initialize an SdkClient instance
const sdkClient: ISdkClient = new SdkClient({
  chainName: process.env.CHAIN_NAME as ChainName,
  networkName: process.env.NETWORK_NAME as NetworkName,
  rpcEndpoint: process.env.RPC_ENDPOINT as Endpoint,
});

// 2. Generate an account from a private key
export const account = sdkClient.createPrivateKeyAccount({});

// 3. Generate a client with the account
export const client = sdkClient.createLocalClient({
  account: account,
});

// 4. Initialize an SDK instance
export const jpyc: IJPYC = new JPYC({
  client: client,
});
```

### 4. SDK Usage

Use the initialized SDK wherever you would like.

```ts
import { jpyc } from './YOUR/PATH/TO/INITIALIZATION/FILE';

// Fetch `totalSupply` from `JPYCv2` contract
const totalSupply = await jpyc.totalSupply();
console.log(`totalSupply: ${totalSupply.toString()}`);
```

## ✨ Code Examples

For your reference, we provide code examples in the separate [`sdk-examples` repository](https://github.com/jcam1/sdk-examples). Please follow the instructions specified in `README` files.

## 🤖 Available Commands

The following commands are available as yarn scripts for local development & testing.

|          Command | Description                                            |
| ---------------: | :----------------------------------------------------- |
|        `compile` | Compile (transpile) SDK                                |
|           `test` | Run unit tests (using jest)                            |
|           `lint` | Run Eslint                                             |
|   `lint:dry-run` | Run Eslint without fixing                              |
|         `format` | Run Prettier                                           |
| `format:dry-run` | Run Prettier without fixing                            |
|           `docs` | Generate developer documents in both Markdown and HTML |
|        `docs:md` | Generate developer documents in Markdown               |
|      `docs:html` | Generate developer documents in HTML                   |

## 📚 Documentation

You can find the auto-generated developer documents [here](https://jcam1.github.io/sdks/).
