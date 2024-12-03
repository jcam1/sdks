[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / JPYC

# Class: JPYC

## Implements

- [`IJPYC`](../interfaces/IJPYC.md)

## Constructors

### new JPYC()

> **new JPYC**(`params`): [`JPYC`](JPYC.md)

#### Parameters

##### params

###### client

\{`account`: `undefined` \| `Account`;`addChain`: (`args`) => `Promise`\<`void`\>;`batch`: \{`multicall`: `boolean` \| \{`batchSize`: `number`;`wait`: `number`; \}; \};`cacheTime`: `number`;`ccipRead`: `false` \| \{`request`: (`parameters`) => `Promise`\<\`0x$\{string\}\`\>; \};`chain`: `undefined` \| `Chain`;`deployContract`: \<`abi`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>;`extend`: \<`client`\>(`fn`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`, `WalletRpcSchema`, \{ \[K in string \| number \| symbol\]: client\[K\] \} & `WalletActions`\<`undefined` \| `Chain`, `undefined` \| `Account`\>\>;`getAddresses`: () => `Promise`\<`GetAddressesReturnType`\>;`getChainId`: () => `Promise`\<`number`\>;`getPermissions`: () => `Promise`\<`GetPermissionsReturnType`\>;`key`: `string`;`name`: `string`;`pollingInterval`: `number`;`prepareTransactionRequest`: \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<Extract\<(...) & (...) & (...), (...) extends (...) ? (...) : (...)\> & \{ chainId?: (...) \| (...) \}, ParameterTypeToParameters\<(...)\[(...)\] extends readonly (...)\[\] ? (...)\[(...)\] : (...) \| (...) \| (...) \| (...) \| (...) \| (...)\>\> & (unknown extends request\["kzg"\] ? \{\} : Pick\<request, "kzg"\>))\[K\] \}\>;`request`: `EIP1193RequestFn`\<`WalletRpcSchema`\>;`requestAddresses`: () => `Promise`\<`RequestAddressesReturnType`\>;`requestPermissions`: (`args`) => `Promise`\<`RequestPermissionsReturnType`\>;`sendRawTransaction`: (`args`) => `Promise`\<\`0x$\{string\}\`\>;`sendTransaction`: \<`request`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>;`signMessage`: (`args`) => `Promise`\<\`0x$\{string\}\`\>;`signTransaction`: \<`chainOverride`, `request`\>(`args`) => `Promise`\<`TransactionSerialized`\<`GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] *extends* `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\>, `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\> *extends* `"eip1559"` ? \`0x02$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] _extends_ ... \| ... ? `Extract`\<..., ...\> : `never`\> _extends_ `"eip2930"` ? \`0x01$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\> *extends* `"eip4844"` ? \`0x03$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] _extends_ ... \| ... ? `Extract`\<..., ...\> : `never`\> _extends_ `"eip7702"` ? \`0x04$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\> *extends* `"legacy"` ? `TransactionSerializedLegacy` : `never`\>\>;`signTypedData`: \<`typedData`, `primaryType`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>;`switchChain`: (`args`) => `Promise`\<`void`\>;`transport`: `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\>;`type`: `string`;`uid`: `string`;`watchAsset`: (`args`) => `Promise`\<`boolean`\>;`writeContract`: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>; \}

###### client.account

`undefined` \| `Account`

The Account of the Client.

###### client.addChain

(`args`) => `Promise`\<`void`\>

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

###### client.batch

\{`multicall`: `boolean` \| \{`batchSize`: `number`;`wait`: `number`; \}; \}

Flags for batch settings.

###### client.batch.multicall

`boolean` \| \{`batchSize`: `number`;`wait`: `number`; \}

Toggle to enable `eth_call` multicall aggregation.

###### client.cacheTime

`number`

Time (in ms) that cached data will remain in memory.

###### client.ccipRead

`false` \| \{`request`: (`parameters`) => `Promise`\<\`0x$\{string\}\`\>; \}

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.

###### client.chain

`undefined` \| `Chain`

Chain for the client.

###### client.deployContract

\<`abi`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Deploys a contract to the network, given bytecode and constructor arguments.

- Docs: https://viem.sh/docs/contract/deployContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_deploying-contracts

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

###### client.extend

\<`client`\>(`fn`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`, `WalletRpcSchema`, \{ \[K in string \| number \| symbol\]: client\[K\] \} & `WalletActions`\<`undefined` \| `Chain`, `undefined` \| `Account`\>\>

###### client.getAddresses

() => `Promise`\<`GetAddressesReturnType`\>

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

###### client.getChainId

() => `Promise`\<`number`\>

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

###### client.getPermissions

() => `Promise`\<`GetPermissionsReturnType`\>

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

###### client.key

`string`

A key for the client.

###### client.name

`string`

A name for the client.

###### client.pollingInterval

`number`

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

###### client.prepareTransactionRequest

\<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<Extract\<(...) & (...) & (...), (...) extends (...) ? (...) : (...)\> & \{ chainId?: (...) \| (...) \}, ParameterTypeToParameters\<(...)\[(...)\] extends readonly (...)\[\] ? (...)\[(...)\] : (...) \| (...) \| (...) \| (...) \| (...) \| (...)\>\> & (unknown extends request\["kzg"\] ? \{\} : Pick\<request, "kzg"\>))\[K\] \}\>

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

###### client.request

`EIP1193RequestFn`\<`WalletRpcSchema`\>

Request function wrapped with friendly error handling

###### client.requestAddresses

() => `Promise`\<`RequestAddressesReturnType`\>

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

###### client.requestPermissions

(`args`) => `Promise`\<`RequestPermissionsReturnType`\>

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

###### client.sendRawTransaction

(`args`) => `Promise`\<\`0x$\{string\}\`\>

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

###### client.sendTransaction

\<`request`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Creates, signs, and sends a new transaction to the network.

- Docs: https://viem.sh/docs/actions/wallet/sendTransaction
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions
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

###### client.signMessage

(`args`) => `Promise`\<\`0x$\{string\}\`\>

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

###### client.signTransaction

\<`chainOverride`, `request`\>(`args`) => `Promise`\<`TransactionSerialized`\<`GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\>, `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] _extends_ ... \| ... ? `Extract`\<..., ...\> : `never`\> _extends_ `"eip1559"` ? \`0x02$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\> *extends* `"eip2930"` ? \`0x01$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] _extends_ ... \| ... ? `Extract`\<..., ...\> : `never`\> _extends_ `"eip4844"` ? \`0x03$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] *extends* ... \| ... ? `Extract`\<..., ...\> : `never`\> *extends* `"eip7702"` ? \`0x04$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| ...\[...\] _extends_ ... \| ... ? `Extract`\<..., ...\> : `never`\> _extends_ `"legacy"` ? `TransactionSerializedLegacy` : `never`\>\>

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

###### client.signTypedData

\<`typedData`, `primaryType`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

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

###### client.switchChain

(`args`) => `Promise`\<`void`\>

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

###### client.transport

`TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\>

The RPC transport

###### client.type

`string`

The type of client.

###### client.uid

`string`

A unique ID for the client.

###### client.watchAsset

(`args`) => `Promise`\<`boolean`\>

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

###### client.writeContract

\<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Executes a write function on a contract.

- Docs: https://viem.sh/docs/contract/writeContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_writing-to-contracts

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

packages/core/src/jpyc.ts:21

## Methods

### allowance()

> **allowance**(`params`): `Promise`\<`Uint256`\>

Returns allowance of a spender over owner's tokens (for transferring).

#### Parameters

##### params

###### owner

\`0x$\{string\}\`

###### spender

\`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

spender allowance

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`allowance`](../interfaces/IJPYC.md#allowance)

#### Defined in

packages/core/src/jpyc.ts:60

---

### approve()

> **approve**(`params`): `Promise`\<\`0x$\{string\}\`\>

Sets allowance of a spender over owner's tokens.

#### Parameters

##### params

###### spender

\`0x$\{string\}\`

###### value

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`approve`](../interfaces/IJPYC.md#approve)

#### Defined in

packages/core/src/jpyc.ts:206

---

### balanceOf()

> **balanceOf**(`params`): `Promise`\<`Uint256`\>

Returns balance of an account.

#### Parameters

##### params

###### account

\`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

account balance

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`balanceOf`](../interfaces/IJPYC.md#balanceof)

#### Defined in

packages/core/src/jpyc.ts:54

---

### cancelAuthorization()

> **cancelAuthorization**(`params`): `Promise`\<\`0x$\{string\}\`\>

Cancels authorization.

#### Parameters

##### params

###### authorizer

\`0x$\{string\}\`

###### nonce

\`0x$\{string\}\`

###### r

\`0x$\{string\}\`

###### s

\`0x$\{string\}\`

###### v

`Uint8`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`cancelAuthorization`](../interfaces/IJPYC.md#cancelauthorization)

#### Defined in

packages/core/src/jpyc.ts:188

---

### configureMinter()

> **configureMinter**(`params`): `Promise`\<\`0x$\{string\}\`\>

Regular Functions

#### Parameters

##### params

###### minter

\`0x$\{string\}\`

###### minterAllowedAmount

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`configureMinter`](../interfaces/IJPYC.md#configureminter)

#### Defined in

packages/core/src/jpyc.ts:76

---

### decreaseAllowance()

> **decreaseAllowance**(`params`): `Promise`\<\`0x$\{string\}\`\>

Decreases allowance.

#### Parameters

##### params

###### decrement

`Uint256`

###### spender

\`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`decreaseAllowance`](../interfaces/IJPYC.md#decreaseallowance)

#### Defined in

packages/core/src/jpyc.ts:230

---

### increaseAllowance()

> **increaseAllowance**(`params`): `Promise`\<\`0x$\{string\}\`\>

Increases allowance.

#### Parameters

##### params

###### increment

`Uint256`

###### spender

\`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`increaseAllowance`](../interfaces/IJPYC.md#increaseallowance)

#### Defined in

packages/core/src/jpyc.ts:218

---

### isMinter()

> **isMinter**(`params`): `Promise`\<`boolean`\>

View Functions

#### Parameters

##### params

###### account

\`0x$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`isMinter`](../interfaces/IJPYC.md#isminter)

#### Defined in

packages/core/src/jpyc.ts:36

---

### mint()

> **mint**(`params`): `Promise`\<\`0x$\{string\}\`\>

Mints tokens.

#### Parameters

##### params

###### amount

`Uint256`

###### to

\`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`mint`](../interfaces/IJPYC.md#mint)

#### Defined in

packages/core/src/jpyc.ts:88

---

### minterAllowance()

> **minterAllowance**(`params`): `Promise`\<`Uint256`\>

Returns allowance of a minter (for minting).

#### Parameters

##### params

###### minter

\`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

minter allowance

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`minterAllowance`](../interfaces/IJPYC.md#minterallowance)

#### Defined in

packages/core/src/jpyc.ts:42

---

### nonces()

> **nonces**(`params`): `Promise`\<`Uint256`\>

Returns nonce for EIP2612's `permit`.

#### Parameters

##### params

###### owner

\`0x$\{string\}\`

#### Returns

`Promise`\<`Uint256`\>

owner nonce

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`nonces`](../interfaces/IJPYC.md#nonces)

#### Defined in

packages/core/src/jpyc.ts:66

---

### permit()

> **permit**(`params`): `Promise`\<\`0x$\{string\}\`\>

Sets allowance of a spender over owner's tokens, given owner's signed approval.

#### Parameters

##### params

###### deadline

`Uint256`

###### owner

\`0x$\{string\}\`

###### r

\`0x$\{string\}\`

###### s

\`0x$\{string\}\`

###### spender

\`0x$\{string\}\`

###### v

`Uint8`

###### value

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`permit`](../interfaces/IJPYC.md#permit)

#### Defined in

packages/core/src/jpyc.ts:242

---

### receiveWithAuthorization()

> **receiveWithAuthorization**(`params`): `Promise`\<\`0x$\{string\}\`\>

Receives tokens with authorization.

#### Parameters

##### params

###### from

\`0x$\{string\}\`

###### nonce

\`0x$\{string\}\`

###### r

\`0x$\{string\}\`

###### s

\`0x$\{string\}\`

###### to

\`0x$\{string\}\`

###### v

`Uint8`

###### validAfter

`Uint256`

###### validBefore

`Uint256`

###### value

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`receiveWithAuthorization`](../interfaces/IJPYC.md#receivewithauthorization)

#### Defined in

packages/core/src/jpyc.ts:156

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

packages/core/src/jpyc.ts:48

---

### transfer()

> **transfer**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens (directly).

#### Parameters

##### params

###### to

\`0x$\{string\}\`

###### value

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`transfer`](../interfaces/IJPYC.md#transfer)

#### Defined in

packages/core/src/jpyc.ts:100

---

### transferFrom()

> **transferFrom**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens (from spender).

#### Parameters

##### params

###### from

\`0x$\{string\}\`

###### to

\`0x$\{string\}\`

###### value

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`transferFrom`](../interfaces/IJPYC.md#transferfrom)

#### Defined in

packages/core/src/jpyc.ts:112

---

### transferWithAuthorization()

> **transferWithAuthorization**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens with authorization.

#### Parameters

##### params

###### from

\`0x$\{string\}\`

###### nonce

\`0x$\{string\}\`

###### r

\`0x$\{string\}\`

###### s

\`0x$\{string\}\`

###### to

\`0x$\{string\}\`

###### v

`Uint8`

###### validAfter

`Uint256`

###### validBefore

`Uint256`

###### value

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Implementation of

[`IJPYC`](../interfaces/IJPYC.md).[`transferWithAuthorization`](../interfaces/IJPYC.md#transferwithauthorization)

#### Defined in

packages/core/src/jpyc.ts:124
