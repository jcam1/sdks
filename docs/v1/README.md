**@jpyc/sdk-v1** • [**Docs**](globals.md)

---

# JPYC V1 SDK

![build](https://github.com/jcam1/sdks/actions/workflows/check.yml/badge.svg)
[![Node version](https://img.shields.io/node/v/@jpyc/sdk-v1.svg?style=flat)](https://nodejs.org/download/)

JPYC V1 SDK implements an interface to interact with [JPYCv2 contracts](https://github.com/jcam1/JPYCv2) on different chains. Supported chains are Ethereum, Polygon, Gnosis, Avalanche, and Astar. Please note that **Shiden Network is not yet supported**.

## 💡 How to Use

Please follow the following steps to configure our SDK.

#### 1. Install Packages

Install packages.

```sh
# yarn
$ yarn add @jpyc/sdk-core @jpyc/sdk-v1

# npm
$ npm i @jpyc/sdk-core @jpyc/sdk-v1
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

Initialize an SDK instance that implements an abstracted interface to JPYCv2 contracts.

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

For your reference, we provide code examples in `examples` directory. Please follow the instructions on [`README`](_media/README.md) file.

## 🤖 Available Commands

The following commands are available as yarn scripts for local development & testing.

|                       Command | Description                                             |
| ----------------------------: | :------------------------------------------------------ |
|                        `docs` | Generate Markdown documents from TSDoc-style comments   |
|                         `env` | Generate `.env` file                                    |
|                        `lint` | Run Eslint                                              |
|                `lint:dry-run` | Run Eslint without fixing                               |
|                      `format` | Run Prettier                                            |
|              `format:dry-run` | Run Prettier without fixing                             |
|                 `compile:sdk` | Compile (transpile) TypeScript files                    |
|           `compile:contracts` | Compile contracts                                       |
|                       `clean` | Delete contract artifacts                               |
|                        `node` | Run hardhat network & node locally                      |
|                      `deploy` | Deploy compiled contracts to local hardhat network      |
|                        `mint` | Example code: mint new tokens                           |
|                `total-supply` | Example code: get total-supply                          |
|                    `transfer` | Example code: transfer tokens                           |
|                     `approve` | Example code: approve allowance                         |
|                      `permit` | Example code: permit allowance (EIP2612)                |
|               `transfer-from` | Example code: transfer tokens from spender              |
| `transfer-with-authorization` | Example code: transfer tokens with signatures (EIP3009) |
|  `receive-with-authorization` | Example code: receive tokens with signatures (EIP3009)  |
|        `cancel-authorization` | Example code: cancel token authorization (EIP3009)      |

## 📚 Documentation

You can find the auto-generated documentation of this SDK [here](_media/globals.md).
