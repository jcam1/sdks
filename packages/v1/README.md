# JPYC V1 SDK

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![build](https://github.com/jcam1/sdks/actions/workflows/check.yml/badge.svg)
[![npm version](https://badge.fury.io/js/@jpyc%2Fsdk-v1.svg)](https://badge.fury.io/js/@jpyc%2Fsdk-v1)

JPYC V1 SDK implements an interface to interact with [JPYCv2 contracts](https://github.com/jcam1/JPYCv2) on different chains. Supported chains are Ethereum, Polygon, Gnosis, Avalanche, and Astar. Please note that **Shiden Network is not yet supported**.

## 💡 How to Use

Please follow the following steps to configure our SDK.

#### 1. Install Packages

Install packages.

```sh
# yarn
$ yarn add @jpyc/sdk-v1

# npm
$ npm i @jpyc/sdk-v1
```

#### 2. Set Environment Variables

Some data, such as configuration variables (e.g., chain name) or sensitive data (e.g., private key), are embedded as environment variables. You need to set the following environment variables.

|              Variable | Description & Instructions                                                                                                        |
| --------------------: | :-------------------------------------------------------------------------------------------------------------------------------- |
|             `SDK_ENV` | SDK environment. Set to `local` for local environment or any other sensible string for production environment.                    |
|          `CHAIN_NAME` | Chain name. Set to one of the following\: `local`, `ethereum`, `polygon`, `gnosis`, `avalanche` or `astar`.                       |
|        `NETWORK_NAME` | Network name within the specified chain. Set to one of the following\: `mainnet`, `goerli`, `sepolia`, `amoy`, `chiado` or `fuji` |
|        `RPC_ENDPOINT` | RPC endpoint to send transactions.                                                                                                |
|         `PRIVATE_KEY` | Private key of an account.                                                                                                        |
| `LOCAL_PROXY_ADDRESS` | Proxy contract address in local environment.                                                                                      |

#### 3. Instantiate SDK

Initialize an SDK instance that implements an abstracted interface to the JPYCv2 contracts.

```ts
import { ChainName, Endpoint, NetworkName } from '@jpyc/sdk-core';
import { IJPYC, ISdkClient, JPYC, SdkClient } from '@jpyc/sdk-v1';

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

#### 4. Use SDK

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

|          Command | Description                                           |
| ---------------: | :---------------------------------------------------- |
|           `docs` | Generate Markdown documents from TSDoc-style comments |
|           `lint` | Run Eslint                                            |
|   `lint:dry-run` | Run Eslint without fixing                             |
|         `format` | Run Prettier                                          |
| `format:dry-run` | Run Prettier without fixing                           |
|        `compile` | Compile (transpile) SDK                               |

## 📚 Documentation

You can find the auto-generated documentation of this SDK [here](../../docs/v1/globals.md).
