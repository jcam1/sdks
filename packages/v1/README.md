# JPYC V1 SDK

## Available Commands

The following commands are available as npm scripts.

|                       Command | Description                                             |
| ----------------------------: | :------------------------------------------------------ |
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
