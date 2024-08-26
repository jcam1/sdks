[**@jpyc/sdk-v1**](../README.md) • **Docs**

---

[@jpyc/sdk-v1](../globals.md) / JPYC

# Class: JPYC

## Implements

- [`IJPYC`](../interfaces/IJPYC.md)

## Constructors

### new JPYC()

> **new JPYC**(`params`): [`JPYC`](JPYC.md)

#### Parameters

• **params**

• **params.client**

• **params.client.account**: `undefined` \| `Account`

The Account of the Client.

• **params.client.addChain**

Adds an EVM chain to the wallet.

- Docs: https://viem.sh/docs/actions/wallet/addChain
- JSON-RPC Methods: [`eth_addEthereumChain`](https://eips.ethereum.org/EIPS/eip-3085)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { optimism } from 'viem/chains';

const client = createWalletClient({
  transport: custom(window.ethereum),
});
await client.addChain({ chain: optimism });
```

• **params.client.batch?**

Flags for batch settings.

• **params.client.batch.multicall?**: `boolean` \| `object`

Toggle to enable `eth_call` multicall aggregation.

• **params.client.cacheTime**: `number`

Time (in ms) that cached data will remain in memory.

• **params.client.ccipRead?**: `false` \| `object`

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.

• **params.client.chain**: `undefined` \| `Chain`

Chain for the client.

• **params.client.deployContract**

Deploys a contract to the network, given bytecode and constructor arguments.

- Docs: https://viem.sh/docs/contract/deployContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/deploying-contracts

**Example**

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})
const hash = await client.deployContract({
  abi: [],
  account: '0x…,
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

• **params.client.extend**

• **params.client.getAddresses**

Returns a list of account addresses owned by the wallet or client.

- Docs: https://viem.sh/docs/actions/wallet/getAddresses
- JSON-RPC Methods: [`eth_accounts`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const accounts = await client.getAddresses();
```

• **params.client.getChainId**

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

**Example**

```ts
import { createWalletClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const chainId = await client.getChainId();
// 1
```

• **params.client.getPermissions**

Gets the wallets current permissions.

- Docs: https://viem.sh/docs/actions/wallet/getPermissions
- JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const permissions = await client.getPermissions();
```

• **params.client.key**: `string`

A key for the client.

• **params.client.name**: `string`

A name for the client.

• **params.client.pollingInterval**: `number`

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

• **params.client.prepareTransactionRequest**

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest

**Examples**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
});
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
});
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
});
```

• **params.client.request**: `EIP1193RequestFn`\<`WalletRpcSchema`\>

Request function wrapped with friendly error handling

• **params.client.requestAddresses**

Requests a list of accounts managed by a wallet.

- Docs: https://viem.sh/docs/actions/wallet/requestAddresses
- JSON-RPC Methods: [`eth_requestAccounts`](https://eips.ethereum.org/EIPS/eip-1102)

Sends a request to the wallet, asking for permission to access the user's accounts. After the user accepts the request, it will return a list of accounts (addresses).

This API can be useful for dapps that need to access the user's accounts in order to execute transactions or interact with smart contracts.

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const accounts = await client.requestAddresses();
```

• **params.client.requestPermissions**

Requests permissions for a wallet.

- Docs: https://viem.sh/docs/actions/wallet/requestPermissions
- JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const permissions = await client.requestPermissions({
  eth_accounts: {},
});
```

• **params.client.sendRawTransaction**

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';
import { sendRawTransaction } from 'viem/wallet';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});

const hash = await client.sendRawTransaction({
  serializedTransaction:
    '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33',
});
```

• **params.client.sendTransaction**

Creates, signs, and sends a new transaction to the network.

- Docs: https://viem.sh/docs/actions/wallet/sendTransaction
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/sending-transactions
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_sendTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)
  - Local Accounts: [`eth_sendRawTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction)

**Examples**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const hash = await client.sendTransaction({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n,
});
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
});
const hash = await client.sendTransaction({
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n,
});
```

• **params.client.signMessage**

Calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

- Docs: https://viem.sh/docs/actions/wallet/signMessage
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`personal_sign`](https://docs.metamask.io/guide/signing-data#personal-sign)
  - Local Accounts: Signs locally. No JSON-RPC request.

With the calculated signature, you can:

- use [`verifyMessage`](https://viem.sh/docs/utilities/verifyMessage) to verify the signature,
- use [`recoverMessageAddress`](https://viem.sh/docs/utilities/recoverMessageAddress) to recover the signing address from a signature.

**Examples**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const signature = await client.signMessage({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  message: 'hello world',
});
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
});
const signature = await client.signMessage({
  message: 'hello world',
});
```

• **params.client.signTransaction**

Signs a transaction.

- Docs: https://viem.sh/docs/actions/wallet/signTransaction
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_signTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
  - Local Accounts: Signs locally. No JSON-RPC request.

**Examples**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
});
const signature = await client.signTransaction(request);
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
});
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
});
const signature = await client.signTransaction(request);
```

• **params.client.signTypedData**

Signs typed data and calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

- Docs: https://viem.sh/docs/actions/wallet/signTypedData
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_signTypedData_v4`](https://docs.metamask.io/guide/signing-data#signtypeddata-v4)
  - Local Accounts: Signs locally. No JSON-RPC request.

**Examples**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const signature = await client.signTypedData({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  domain: {
    name: 'Ether Mail',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  },
  types: {
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' },
    ],
  },
  primaryType: 'Mail',
  message: {
    from: {
      name: 'Cow',
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    },
    to: {
      name: 'Bob',
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    },
    contents: 'Hello, Bob!',
  },
});
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
});
const signature = await client.signTypedData({
  domain: {
    name: 'Ether Mail',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  },
  types: {
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' },
    ],
  },
  primaryType: 'Mail',
  message: {
    from: {
      name: 'Cow',
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    },
    to: {
      name: 'Bob',
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    },
    contents: 'Hello, Bob!',
  },
});
```

• **params.client.switchChain**

Switch the target chain in a wallet.

- Docs: https://viem.sh/docs/actions/wallet/switchChain
- JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-3326)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet, optimism } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
await client.switchChain({ id: optimism.id });
```

• **params.client.transport**: `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\>

The RPC transport

• **params.client.type**: `string`

The type of client.

• **params.client.uid**: `string`

A unique ID for the client.

• **params.client.watchAsset**

Adds an EVM chain to the wallet.

- Docs: https://viem.sh/docs/actions/wallet/watchAsset
- JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747)

**Example**

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const success = await client.watchAsset({
  type: 'ERC20',
  options: {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    decimals: 18,
    symbol: 'WETH',
  },
});
```

• **params.client.writeContract**

Executes a write function on a contract.

- Docs: https://viem.sh/docs/contract/writeContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/writing-to-contracts

A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state.

Internally, uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

**Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.**

**Examples**

```ts
import { createWalletClient, custom, parseAbi } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const hash = await client.writeContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  functionName: 'mint',
  args: [69420],
});
```

```ts
// With Validation
import { createWalletClient, custom, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const { request } = await client.simulateContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  functionName: 'mint',
  args: [69420],
}
const hash = await client.writeContract(request)
```

#### Returns

[`JPYC`](JPYC.md)

#### Defined in

[packages/v1/src/jpyc.ts:19](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L19)

## Methods

### allowance()

> **allowance**(`params`): `Promise`\<`Uint256`\>

Returns allowance of a spender over owner's tokens (for transferring).

#### Parameters

• **params**

• **params.owner**: \`0x$\{string\}\`

• **params.spender**: \`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

spender allowance

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`allowance`](../interfaces/IJPYC.md#allowance)

#### Defined in

[packages/v1/src/jpyc.ts:58](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L58)

---

### approve()

> **approve**(`params`): `Promise`\<\`0x$\{string\}\`\>

Sets allowance of a spender over owner's tokens.

#### Parameters

• **params**

• **params.spender**: \`0x$\{string\}\`

• **params.value**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`approve`](../interfaces/IJPYC.md#approve)

#### Defined in

[packages/v1/src/jpyc.ts:204](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L204)

---

### balanceOf()

> **balanceOf**(`params`): `Promise`\<`Uint256`\>

Returns balance of an account.

#### Parameters

• **params**

• **params.account**: \`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

account balance

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`balanceOf`](../interfaces/IJPYC.md#balanceof)

#### Defined in

[packages/v1/src/jpyc.ts:52](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L52)

---

### cancelAuthorization()

> **cancelAuthorization**(`params`): `Promise`\<\`0x$\{string\}\`\>

Cancels authorization.

#### Parameters

• **params**

• **params.authorizer**: \`0x$\{string\}\`

• **params.nonce**: \`0x$\{string\}\`

• **params.r**: \`0x$\{string\}\`

• **params.s**: \`0x$\{string\}\`

• **params.v**: `Uint8`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`cancelAuthorization`](../interfaces/IJPYC.md#cancelauthorization)

#### Defined in

[packages/v1/src/jpyc.ts:186](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L186)

---

### configureMinter()

> **configureMinter**(`params`): `Promise`\<\`0x$\{string\}\`\>

Regular Functions

#### Parameters

• **params**

• **params.minter**: \`0x$\{string\}\`

• **params.minterAllowedAmount**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`configureMinter`](../interfaces/IJPYC.md#configureminter)

#### Defined in

[packages/v1/src/jpyc.ts:74](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L74)

---

### decreaseAllowance()

> **decreaseAllowance**(`params`): `Promise`\<\`0x$\{string\}\`\>

Decreases allowance.

#### Parameters

• **params**

• **params.decrement**: `Uint256`

• **params.spender**: \`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`decreaseAllowance`](../interfaces/IJPYC.md#decreaseallowance)

#### Defined in

[packages/v1/src/jpyc.ts:228](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L228)

---

### increaseAllowance()

> **increaseAllowance**(`params`): `Promise`\<\`0x$\{string\}\`\>

Increases allowance.

#### Parameters

• **params**

• **params.increment**: `Uint256`

• **params.spender**: \`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`increaseAllowance`](../interfaces/IJPYC.md#increaseallowance)

#### Defined in

[packages/v1/src/jpyc.ts:216](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L216)

---

### isMinter()

> **isMinter**(`params`): `Promise`\<`boolean`\>

View Functions

#### Parameters

• **params**

• **params.account**: \`0x$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`isMinter`](../interfaces/IJPYC.md#isminter)

#### Defined in

[packages/v1/src/jpyc.ts:34](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L34)

---

### mint()

> **mint**(`params`): `Promise`\<\`0x$\{string\}\`\>

Mints tokens.

#### Parameters

• **params**

• **params.amount**: `Uint256`

• **params.to**: \`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`mint`](../interfaces/IJPYC.md#mint)

#### Defined in

[packages/v1/src/jpyc.ts:86](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L86)

---

### minterAllowance()

> **minterAllowance**(`params`): `Promise`\<`Uint256`\>

Returns allowance of a minter (for minting).

#### Parameters

• **params**

• **params.minter**: \`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

minter allowance

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`minterAllowance`](../interfaces/IJPYC.md#minterallowance)

#### Defined in

[packages/v1/src/jpyc.ts:40](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L40)

---

### nonces()

> **nonces**(`params`): `Promise`\<`Uint256`\>

Returns nonce for EIP2612's `permit`.

#### Parameters

• **params**

• **params.owner**: \`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

owner nonce

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`nonces`](../interfaces/IJPYC.md#nonces)

#### Defined in

[packages/v1/src/jpyc.ts:64](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L64)

---

### permit()

> **permit**(`params`): `Promise`\<\`0x$\{string\}\`\>

Sets allowance of a spender over owner's tokens, given owner's signed approval.

#### Parameters

• **params**

• **params.deadline**: `Uint256`

• **params.owner**: \`0x$\{string\}\`

• **params.r**: \`0x$\{string\}\`

• **params.s**: \`0x$\{string\}\`

• **params.spender**: \`0x$\{string\}\`

• **params.v**: `Uint8`

• **params.value**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`permit`](../interfaces/IJPYC.md#permit)

#### Defined in

[packages/v1/src/jpyc.ts:240](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L240)

---

### receiveWithAuthorization()

> **receiveWithAuthorization**(`params`): `Promise`\<\`0x$\{string\}\`\>

Receives tokens with authorization.

#### Parameters

• **params**

• **params.from**: \`0x$\{string\}\`

• **params.nonce**: \`0x$\{string\}\`

• **params.r**: \`0x$\{string\}\`

• **params.s**: \`0x$\{string\}\`

• **params.to**: \`0x$\{string\}\`

• **params.v**: `Uint8`

• **params.validAfter**: `Uint256`

• **params.validBefore**: `Uint256`

• **params.value**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`receiveWithAuthorization`](../interfaces/IJPYC.md#receivewithauthorization)

#### Defined in

[packages/v1/src/jpyc.ts:154](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L154)

---

### totalSupply()

> **totalSupply**(): `Promise`\<`Uint256`\>

Returns total supply of JPYC tokens.

#### Returns

`Promise`\<`Uint256`\>

total supply

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`totalSupply`](../interfaces/IJPYC.md#totalsupply)

#### Defined in

[packages/v1/src/jpyc.ts:46](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L46)

---

### transfer()

> **transfer**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens (directly).

#### Parameters

• **params**

• **params.to**: \`0x$\{string\}\`

• **params.value**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`transfer`](../interfaces/IJPYC.md#transfer)

#### Defined in

[packages/v1/src/jpyc.ts:98](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L98)

---

### transferFrom()

> **transferFrom**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens (from spender).

#### Parameters

• **params**

• **params.from**: \`0x$\{string\}\`

• **params.to**: \`0x$\{string\}\`

• **params.value**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`transferFrom`](../interfaces/IJPYC.md#transferfrom)

#### Defined in

[packages/v1/src/jpyc.ts:110](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L110)

---

### transferWithAuthorization()

> **transferWithAuthorization**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens with authorization.

#### Parameters

• **params**

• **params.from**: \`0x$\{string\}\`

• **params.nonce**: \`0x$\{string\}\`

• **params.r**: \`0x$\{string\}\`

• **params.s**: \`0x$\{string\}\`

• **params.to**: \`0x$\{string\}\`

• **params.v**: `Uint8`

• **params.validAfter**: `Uint256`

• **params.validBefore**: `Uint256`

• **params.value**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`transferWithAuthorization`](../interfaces/IJPYC.md#transferwithauthorization)

#### Defined in

[packages/v1/src/jpyc.ts:122](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/jpyc.ts#L122)
