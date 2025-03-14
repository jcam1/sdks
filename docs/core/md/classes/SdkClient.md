[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / SdkClient

# Class: SdkClient

## Implements

- [`ISdkClient`](../interfaces/ISdkClient.md)

## Constructors

### new SdkClient()

> **new SdkClient**(`params`): [`SdkClient`](SdkClient.md)

#### Parameters

##### params

###### chainName

[`ChainName`](../type-aliases/ChainName.md)

###### networkName

[`NetworkName`](../type-aliases/NetworkName.md)

###### rpcEndpoint

`string`

#### Returns

[`SdkClient`](SdkClient.md)

#### Defined in

[packages/core/src/client.ts:24](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/client.ts#L24)

## Methods

### createLocalClient()

> **createLocalClient**(`params`): `object`

Creates a client from an account.

#### Parameters

##### params

###### account

\`0x$\{string\}\` \| \{`address`: \`0x$\{string\}\`;`experimental_signAuthorization`: (`parameters`) => `Promise`\<`SignAuthorizationReturnType`\>;`nonceManager`: `NonceManager`;`publicKey`: \`0x$\{string\}\`;`sign`: (`parameters`) => `Promise`\<\`0x$\{string\}\`\>;`signMessage`: (`__namedParameters`) => `Promise`\<\`0x$\{string\}\`\>;`signTransaction`: \<`serializer`, `transaction`\>(`transaction`, `options`?) => `Promise`\<`IsNarrowable`\<`TransactionSerialized`\<`GetTransactionType`\<`transaction`\>\>, \`0x$\{string\}\`\> _extends_ `true` ? `TransactionSerialized`\<`GetTransactionType`\<`transaction`\>\> : \`0x$\{string\}\`\>;`signTypedData`: \<`typedData`, `primaryType`\>(`parameters`) => `Promise`\<\`0x$\{string\}\`\>;`source`: `"privateKey"`;`type`: `"local"`; \}

#### Returns

`object`

WalletClient

##### account

> **account**: `undefined` \| `Account`

The Account of the Client.

##### addChain()

> **addChain**: (`args`) => `Promise`\<`void`\>

Adds an EVM chain to the wallet.

- Docs: https://viem.sh/docs/actions/wallet/addChain
- JSON-RPC Methods: [`eth_addEthereumChain`](https://eips.ethereum.org/EIPS/eip-3085)

###### Parameters

###### args

`AddChainParameters`

AddChainParameters

###### Returns

`Promise`\<`void`\>

###### Example

```ts
import { createWalletClient, custom } from 'viem';
import { optimism } from 'viem/chains';

const client = createWalletClient({
  transport: custom(window.ethereum),
});
await client.addChain({ chain: optimism });
```

##### batch?

> `optional` **batch**: `object`

Flags for batch settings.

###### batch.multicall?

> `optional` **multicall**: `boolean` \| \{`batchSize`: `number`;`wait`: `number`; \}

Toggle to enable `eth_call` multicall aggregation.

###### Type declaration

`boolean`

\{`batchSize`: `number`;`wait`: `number`; \}

##### cacheTime

> **cacheTime**: `number`

Time (in ms) that cached data will remain in memory.

##### ccipRead?

> `optional` **ccipRead**: `false` \| \{`request`: (`parameters`) => `Promise`\<\`0x$\{string\}\`\>; \}

[CCIP Read](https://eips.ethereum.org/EIPS/eip-3668) configuration.

###### Type declaration

`false`

\{`request`: (`parameters`) => `Promise`\<\`0x$\{string\}\`\>; \}

##### chain

> **chain**: `undefined` \| `Chain`

Chain for the client.

##### deployContract()

> **deployContract**: \<`abi`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Deploys a contract to the network, given bytecode and constructor arguments.

- Docs: https://viem.sh/docs/contract/deployContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_deploying-contracts

###### Type Parameters

• **abi** _extends_ `Abi` \| readonly `unknown`[]

• **chainOverride** _extends_ `undefined` \| `Chain`

###### Parameters

###### args

`DeployContractParameters`\<`abi`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`\>

DeployContractParameters

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash. DeployContractReturnType

###### Example

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

##### extend()

> **extend**: \<`client`\>(`fn`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`, `WalletRpcSchema`, \{ \[K in string \| number \| symbol\]: client\[K\] \} & `WalletActions`\<`undefined` \| `Chain`, `undefined` \| `Account`\>\>

###### Type Parameters

• **client** _extends_ `object` & `ExactPartial`\<`ExtendableProtectedActions`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`\>\>

###### Parameters

###### fn

(`client`) => `client`

###### Returns

`Client`\<`Transport`, `undefined` \| `Chain`, `undefined` \| `Account`, `WalletRpcSchema`, \{ \[K in string \| number \| symbol\]: client\[K\] \} & `WalletActions`\<`undefined` \| `Chain`, `undefined` \| `Account`\>\>

##### getAddresses()

> **getAddresses**: () => `Promise`\<`GetAddressesReturnType`\>

Returns a list of account addresses owned by the wallet or client.

- Docs: https://viem.sh/docs/actions/wallet/getAddresses
- JSON-RPC Methods: [`eth_accounts`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)

###### Returns

`Promise`\<`GetAddressesReturnType`\>

List of account addresses owned by the wallet or client. GetAddressesReturnType

###### Example

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const accounts = await client.getAddresses();
```

##### getChainId()

> **getChainId**: () => `Promise`\<`number`\>

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

###### Returns

`Promise`\<`number`\>

The current chain ID. GetChainIdReturnType

###### Example

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

##### getPermissions()

> **getPermissions**: () => `Promise`\<`GetPermissionsReturnType`\>

Gets the wallets current permissions.

- Docs: https://viem.sh/docs/actions/wallet/getPermissions
- JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255)

###### Returns

`Promise`\<`GetPermissionsReturnType`\>

The wallet permissions. GetPermissionsReturnType

###### Example

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const permissions = await client.getPermissions();
```

##### key

> **key**: `string`

A key for the client.

##### name

> **name**: `string`

A name for the client.

##### pollingInterval

> **pollingInterval**: `number`

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

##### prepareTransactionRequest()

> **prepareTransactionRequest**: \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<Extract\<UnionOmit\<(...), (...)\> & ((...) extends (...) ? (...) : (...)) & ((...) extends (...) ? (...) : (...)), IsNever\<(...)\> extends true ? unknown : ExactPartial\<(...)\>\> & \{ chainId?: number \}, ParameterTypeToParameters\<request\["parameters"\] extends readonly PrepareTransactionRequestParameterType\[\] ? any\[any\]\[number\] : "nonce" \| "fees" \| "gas" \| "blobVersionedHashes" \| "chainId" \| "type"\>\> & (unknown extends request\["kzg"\] ? \{\} : Pick\<request, "kzg"\>))\[K\] \}\>

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest

###### Type Parameters

• **request** _extends_ `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> & `object` & `object`

• **chainOverride** _extends_ `undefined` \| `Chain` = `undefined`

• **accountOverride** _extends_ `undefined` \| \`0x$\{string\}\` \| `Account` = `undefined`

###### Parameters

###### args

`PrepareTransactionRequestParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `accountOverride`, `request`\>

PrepareTransactionRequestParameters

###### Returns

`Promise`\<\{ \[K in string \| number \| symbol\]: (UnionRequiredBy\<Extract\<UnionOmit\<(...), (...)\> & ((...) extends (...) ? (...) : (...)) & ((...) extends (...) ? (...) : (...)), IsNever\<(...)\> extends true ? unknown : ExactPartial\<(...)\>\> & \{ chainId?: number \}, ParameterTypeToParameters\<request\["parameters"\] extends readonly PrepareTransactionRequestParameterType\[\] ? any\[any\]\[number\] : "nonce" \| "fees" \| "gas" \| "blobVersionedHashes" \| "chainId" \| "type"\>\> & (unknown extends request\["kzg"\] ? \{\} : Pick\<request, "kzg"\>))\[K\] \}\>

The transaction request. PrepareTransactionRequestReturnType

###### Examples

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

##### request

> **request**: `EIP1193RequestFn`\<`WalletRpcSchema`\>

Request function wrapped with friendly error handling

##### requestAddresses()

> **requestAddresses**: () => `Promise`\<`RequestAddressesReturnType`\>

Requests a list of accounts managed by a wallet.

- Docs: https://viem.sh/docs/actions/wallet/requestAddresses
- JSON-RPC Methods: [`eth_requestAccounts`](https://eips.ethereum.org/EIPS/eip-1102)

Sends a request to the wallet, asking for permission to access the user's accounts. After the user accepts the request, it will return a list of accounts (addresses).

This API can be useful for dapps that need to access the user's accounts in order to execute transactions or interact with smart contracts.

###### Returns

`Promise`\<`RequestAddressesReturnType`\>

List of accounts managed by a wallet RequestAddressesReturnType

###### Example

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
const accounts = await client.requestAddresses();
```

##### requestPermissions()

> **requestPermissions**: (`args`) => `Promise`\<`RequestPermissionsReturnType`\>

Requests permissions for a wallet.

- Docs: https://viem.sh/docs/actions/wallet/requestPermissions
- JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255)

###### Parameters

###### args

RequestPermissionsParameters

###### eth_accounts

`Record`\<`string`, `any`\>

###### Returns

`Promise`\<`RequestPermissionsReturnType`\>

The wallet permissions. RequestPermissionsReturnType

###### Example

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

##### sendRawTransaction()

> **sendRawTransaction**: (`args`) => `Promise`\<\`0x$\{string\}\`\>

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

###### Parameters

###### args

`SendRawTransactionParameters`

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The transaction hash. SendRawTransactionReturnType

###### Example

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

##### sendTransaction()

> **sendTransaction**: \<`request`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Creates, signs, and sends a new transaction to the network.

- Docs: https://viem.sh/docs/actions/wallet/sendTransaction
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_sendTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)
  - Local Accounts: [`eth_sendRawTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction)

###### Type Parameters

• **request** _extends_ `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> & `object`

• **chainOverride** _extends_ `undefined` \| `Chain` = `undefined`

###### Parameters

###### args

`SendTransactionParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `request`\>

SendTransactionParameters

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash. SendTransactionReturnType

###### Examples

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

##### signMessage()

> **signMessage**: (`args`) => `Promise`\<\`0x$\{string\}\`\>

Calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

- Docs: https://viem.sh/docs/actions/wallet/signMessage
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`personal_sign`](https://docs.metamask.io/guide/signing-data#personal-sign)
  - Local Accounts: Signs locally. No JSON-RPC request.

With the calculated signature, you can:

- use [`verifyMessage`](https://viem.sh/docs/utilities/verifyMessage) to verify the signature,
- use [`recoverMessageAddress`](https://viem.sh/docs/utilities/recoverMessageAddress) to recover the signing address from a signature.

###### Parameters

###### args

`SignMessageParameters`\<`undefined` \| `Account`\>

SignMessageParameters

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The signed message. SignMessageReturnType

###### Examples

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

##### signTransaction()

> **signTransaction**: \<`chainOverride`, `request`\>(`args`) => `Promise`\<`TransactionSerialized`\<`GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\>, `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> _extends_ `"eip1559"` ? \`0x02$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] *extends* `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> *extends* `"eip2930"` ? \`0x01$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> _extends_ `"eip4844"` ? \`0x03$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] *extends* `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> *extends* `"eip7702"` ? \`0x04$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> _extends_ `"legacy"` ? `TransactionSerializedLegacy` : `never`\>\>

Signs a transaction.

- Docs: https://viem.sh/docs/actions/wallet/signTransaction
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_signTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
  - Local Accounts: Signs locally. No JSON-RPC request.

###### Type Parameters

• **chainOverride** _extends_ `undefined` \| `Chain`

• **request** _extends_ `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> \| `Omit`\<`object`, `"from"`\> = `UnionOmit`\<`ExtractChainFormatterParameters`\<`DeriveChain`\<`undefined` \| `Chain`, `chainOverride`\>, `"transactionRequest"`, `TransactionRequest`\>, `"from"`\>

###### Parameters

###### args

`SignTransactionParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `request`\>

SignTransactionParameters

###### Returns

`Promise`\<`TransactionSerialized`\<`GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\>, `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> _extends_ `"eip1559"` ? \`0x02$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] *extends* `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> *extends* `"eip2930"` ? \`0x01$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> _extends_ `"eip4844"` ? \`0x03$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` *extends* `LegacyProperties` ? `"legacy"` : `never` \| `request` *extends* `EIP1559Properties` ? `"eip1559"` : `never` \| `request` *extends* `EIP2930Properties` ? `"eip2930"` : `never` \| `request` *extends* `EIP4844Properties` ? `"eip4844"` : `never` \| `request` *extends* `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] *extends* `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> *extends* `"eip7702"` ? \`0x04$\{string\}\` : `never` \| `GetTransactionType`\<`request`, `request` _extends_ `LegacyProperties` ? `"legacy"` : `never` \| `request` _extends_ `EIP1559Properties` ? `"eip1559"` : `never` \| `request` _extends_ `EIP2930Properties` ? `"eip2930"` : `never` \| `request` _extends_ `EIP4844Properties` ? `"eip4844"` : `never` \| `request` _extends_ `EIP7702Properties` ? `"eip7702"` : `never` \| `request`\[`"type"`\] _extends_ `undefined` \| `string` ? `Extract`\<`any`\[`any`\], `string`\> : `never`\> _extends_ `"legacy"` ? `TransactionSerializedLegacy` : `never`\>\>

The signed message. SignTransactionReturnType

###### Examples

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

##### signTypedData()

> **signTypedData**: \<`typedData`, `primaryType`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Signs typed data and calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

- Docs: https://viem.sh/docs/actions/wallet/signTypedData
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_signTypedData_v4`](https://docs.metamask.io/guide/signing-data#signtypeddata-v4)
  - Local Accounts: Signs locally. No JSON-RPC request.

###### Type Parameters

• **typedData** _extends_ \{`[key: `uint248[${string}]`]`: `undefined`; `[key: `uint240[${string}]`]`: `undefined`; `[key: `uint232[${string}]`]`: `undefined`; `[key: `uint224[${string}]`]`: `undefined`; `[key: `uint216[${string}]`]`: `undefined`; `[key: `uint208[${string}]`]`: `undefined`; `[key: `uint200[${string}]`]`: `undefined`; `[key: `uint192[${string}]`]`: `undefined`; `[key: `uint184[${string}]`]`: `undefined`; `[key: `uint176[${string}]`]`: `undefined`; `[key: `uint168[${string}]`]`: `undefined`; `[key: `uint160[${string}]`]`: `undefined`; `[key: `uint152[${string}]`]`: `undefined`; `[key: `uint144[${string}]`]`: `undefined`; `[key: `uint136[${string}]`]`: `undefined`; `[key: `uint128[${string}]`]`: `undefined`; `[key: `uint120[${string}]`]`: `undefined`; `[key: `uint112[${string}]`]`: `undefined`; `[key: `uint104[${string}]`]`: `undefined`; `[key: `uint96[${string}]`]`: `undefined`; `[key: `uint88[${string}]`]`: `undefined`; `[key: `uint80[${string}]`]`: `undefined`; `[key: `uint72[${string}]`]`: `undefined`; `[key: `uint64[${string}]`]`: `undefined`; `[key: `uint56[${string}]`]`: `undefined`; `[key: `uint48[${string}]`]`: `undefined`; `[key: `uint40[${string}]`]`: `undefined`; `[key: `uint32[${string}]`]`: `undefined`; `[key: `uint24[${string}]`]`: `undefined`; `[key: `uint16[${string}]`]`: `undefined`; `[key: `uint[${string}]`]`: `undefined`; `[key: `int256[${string}]`]`: `undefined`; `[key: `int248[${string}]`]`: `undefined`; `[key: `int240[${string}]`]`: `undefined`; `[key: `int232[${string}]`]`: `undefined`; `[key: `int224[${string}]`]`: `undefined`; `[key: `int216[${string}]`]`: `undefined`; `[key: `int208[${string}]`]`: `undefined`; `[key: `int200[${string}]`]`: `undefined`; `[key: `int192[${string}]`]`: `undefined`; `[key: `int184[${string}]`]`: `undefined`; `[key: `int176[${string}]`]`: `undefined`; `[key: `int168[${string}]`]`: `undefined`; `[key: `int160[${string}]`]`: `undefined`; `[key: `int152[${string}]`]`: `undefined`; `[key: `int144[${string}]`]`: `undefined`; `[key: `int136[${string}]`]`: `undefined`; `[key: `int128[${string}]`]`: `undefined`; `[key: `int120[${string}]`]`: `undefined`; `[key: `int112[${string}]`]`: `undefined`; `[key: `int104[${string}]`]`: `undefined`; `[key: `int96[${string}]`]`: `undefined`; `[key: `int88[${string}]`]`: `undefined`; `[key: `int80[${string}]`]`: `undefined`; `[key: `int72[${string}]`]`: `undefined`; `[key: `int64[${string}]`]`: `undefined`; `[key: `int56[${string}]`]`: `undefined`; `[key: `int48[${string}]`]`: `undefined`; `[key: `int40[${string}]`]`: `undefined`; `[key: `int32[${string}]`]`: `undefined`; `[key: `int24[${string}]`]`: `undefined`; `[key: `int16[${string}]`]`: `undefined`; `[key: `int8[${string}]`]`: `undefined`; `[key: `int[${string}]`]`: `undefined`; `[key: `bytes31[${string}]`]`: `undefined`; `[key: `bytes30[${string}]`]`: `undefined`; `[key: `bytes29[${string}]`]`: `undefined`; `[key: `bytes28[${string}]`]`: `undefined`; `[key: `bytes27[${string}]`]`: `undefined`; `[key: `bytes26[${string}]`]`: `undefined`; `[key: `bytes25[${string}]`]`: `undefined`; `[key: `bytes24[${string}]`]`: `undefined`; `[key: `bytes22[${string}]`]`: `undefined`; `[key: `bytes21[${string}]`]`: `undefined`; `[key: `bytes20[${string}]`]`: `undefined`; `[key: `bytes19[${string}]`]`: `undefined`; `[key: `bytes17[${string}]`]`: `undefined`; `[key: `bytes16[${string}]`]`: `undefined`; `[key: `bytes15[${string}]`]`: `undefined`; `[key: `bytes14[${string}]`]`: `undefined`; `[key: `bytes13[${string}]`]`: `undefined`; `[key: `bytes12[${string}]`]`: `undefined`; `[key: `bytes11[${string}]`]`: `undefined`; `[key: `bytes9[${string}]`]`: `undefined`; `[key: `bytes8[${string}]`]`: `undefined`; `[key: `bytes7[${string}]`]`: `undefined`; `[key: `bytes6[${string}]`]`: `undefined`; `[key: `bytes4[${string}]`]`: `undefined`; `[key: `bytes3[${string}]`]`: `undefined`; `[key: `bytes2[${string}]`]`: `undefined`; `[key: `bytes23[${string}]`]`: `undefined`; `[key: `bytes10[${string}]`]`: `undefined`; `[key: `bytes5[${string}]`]`: `undefined`; `[key: `bytes18[${string}]`]`: `undefined`; `[key: `bytes1[${string}]`]`: `undefined`; `[key: `bytes[${string}]`]`: `undefined`; `[key: `uint8[${string}]`]`: `undefined`; `[key: `bool[${string}]`]`: `undefined`; `[key: `bytes32[${string}]`]`: `undefined`; `[key: `uint256[${string}]`]`: `undefined`; `[key: `address[${string}]`]`: `undefined`; `[key: `function[${string}]`]`: `undefined`; `[key: `string[${string}]`]`: `undefined`; `[key: string]`: readonly `TypedDataParameter`[]; `address`: `undefined`;`bool`: `undefined`;`bytes`: `undefined`;`bytes1`: `undefined`;`bytes10`: `undefined`;`bytes11`: `undefined`;`bytes12`: `undefined`;`bytes13`: `undefined`;`bytes14`: `undefined`;`bytes15`: `undefined`;`bytes16`: `undefined`;`bytes17`: `undefined`;`bytes18`: `undefined`;`bytes19`: `undefined`;`bytes2`: `undefined`;`bytes20`: `undefined`;`bytes21`: `undefined`;`bytes22`: `undefined`;`bytes23`: `undefined`;`bytes24`: `undefined`;`bytes25`: `undefined`;`bytes26`: `undefined`;`bytes27`: `undefined`;`bytes28`: `undefined`;`bytes29`: `undefined`;`bytes3`: `undefined`;`bytes30`: `undefined`;`bytes31`: `undefined`;`bytes32`: `undefined`;`bytes4`: `undefined`;`bytes5`: `undefined`;`bytes6`: `undefined`;`bytes7`: `undefined`;`bytes8`: `undefined`;`bytes9`: `undefined`;`int104`: `undefined`;`int112`: `undefined`;`int120`: `undefined`;`int128`: `undefined`;`int136`: `undefined`;`int144`: `undefined`;`int152`: `undefined`;`int16`: `undefined`;`int160`: `undefined`;`int168`: `undefined`;`int176`: `undefined`;`int184`: `undefined`;`int192`: `undefined`;`int200`: `undefined`;`int208`: `undefined`;`int216`: `undefined`;`int224`: `undefined`;`int232`: `undefined`;`int24`: `undefined`;`int240`: `undefined`;`int248`: `undefined`;`int256`: `undefined`;`int32`: `undefined`;`int40`: `undefined`;`int48`: `undefined`;`int56`: `undefined`;`int64`: `undefined`;`int72`: `undefined`;`int8`: `undefined`;`int80`: `undefined`;`int88`: `undefined`;`int96`: `undefined`;`string`: `undefined`;`uint104`: `undefined`;`uint112`: `undefined`;`uint120`: `undefined`;`uint128`: `undefined`;`uint136`: `undefined`;`uint144`: `undefined`;`uint152`: `undefined`;`uint16`: `undefined`;`uint160`: `undefined`;`uint168`: `undefined`;`uint176`: `undefined`;`uint184`: `undefined`;`uint192`: `undefined`;`uint200`: `undefined`;`uint208`: `undefined`;`uint216`: `undefined`;`uint224`: `undefined`;`uint232`: `undefined`;`uint24`: `undefined`;`uint240`: `undefined`;`uint248`: `undefined`;`uint256`: `undefined`;`uint32`: `undefined`;`uint40`: `undefined`;`uint48`: `undefined`;`uint56`: `undefined`;`uint64`: `undefined`;`uint72`: `undefined`;`uint8`: `undefined`;`uint80`: `undefined`;`uint88`: `undefined`;`uint96`: `undefined`; \} \| \{\}

• **primaryType** _extends_ `string`

###### Parameters

###### args

`SignTypedDataParameters`\<`typedData`, `primaryType`, `undefined` \| `Account`\>

SignTypedDataParameters

###### Returns

`Promise`\<\`0x$\{string\}\`\>

The signed data. SignTypedDataReturnType

###### Examples

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

##### switchChain()

> **switchChain**: (`args`) => `Promise`\<`void`\>

Switch the target chain in a wallet.

- Docs: https://viem.sh/docs/actions/wallet/switchChain
- JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-3326)

###### Parameters

###### args

`SwitchChainParameters`

SwitchChainParameters

###### Returns

`Promise`\<`void`\>

###### Example

```ts
import { createWalletClient, custom } from 'viem';
import { mainnet, optimism } from 'viem/chains';

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
});
await client.switchChain({ id: optimism.id });
```

##### transport

> **transport**: `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\>

The RPC transport

##### type

> **type**: `string`

The type of client.

##### uid

> **uid**: `string`

A unique ID for the client.

##### watchAsset()

> **watchAsset**: (`args`) => `Promise`\<`boolean`\>

Adds an EVM chain to the wallet.

- Docs: https://viem.sh/docs/actions/wallet/watchAsset
- JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747)

###### Parameters

###### args

`WatchAssetParams`

WatchAssetParameters

###### Returns

`Promise`\<`boolean`\>

Boolean indicating if the token was successfully added. WatchAssetReturnType

###### Example

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

##### writeContract()

> **writeContract**: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<\`0x$\{string\}\`\>

Executes a write function on a contract.

- Docs: https://viem.sh/docs/contract/writeContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_writing-to-contracts

A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state.

Internally, uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

**Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.**

###### Type Parameters

• **abi** _extends_ `Abi` \| readonly `unknown`[]

• **functionName** _extends_ `string`

• **args** _extends_ `unknown`

• **chainOverride** _extends_ `undefined` \| `Chain` = `undefined`

###### Parameters

###### args

`WriteContractParameters`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`\>

WriteContractParameters

###### Returns

`Promise`\<\`0x$\{string\}\`\>

A [Transaction Hash](https://viem.sh/docs/glossary/terms#hash). WriteContractReturnType

###### Examples

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

#### Implementation of

[`ISdkClient`](../interfaces/ISdkClient.md).[`createLocalClient`](../interfaces/ISdkClient.md#createlocalclient)

#### Defined in

[packages/core/src/client.ts:42](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/client.ts#L42)

---

### createPrivateKeyAccount()

> **createPrivateKeyAccount**(`params`): `object`

Creates an account from a private key.

#### Parameters

##### params

###### privateKey

\`0x$\{string\}\`

#### Returns

`object`

PrivateKeyAccount

##### address

> **address**: \`0x$\{string\}\`

##### experimental_signAuthorization()

> **experimental_signAuthorization**: (`parameters`) => `Promise`\<`SignAuthorizationReturnType`\>

###### Parameters

###### parameters

`Authorization`

###### Returns

`Promise`\<`SignAuthorizationReturnType`\>

##### nonceManager?

> `optional` **nonceManager**: `NonceManager`

##### publicKey

> **publicKey**: \`0x$\{string\}\`

##### sign()

> **sign**: (`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

###### parameters

###### hash

\`0x$\{string\}\`

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### signMessage()

> **signMessage**: (`__namedParameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Parameters

###### \_\_namedParameters

###### message

`SignableMessage`

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### signTransaction()

> **signTransaction**: \<`serializer`, `transaction`\>(`transaction`, `options`?) => `Promise`\<`IsNarrowable`\<`TransactionSerialized`\<`GetTransactionType`\<`transaction`\>\>, \`0x$\{string\}\`\> *extends* `true` ? `TransactionSerialized`\<`GetTransactionType`\<`transaction`\>\> : \`0x$\{string\}\`\>

###### Type Parameters

• **serializer** _extends_ `SerializeTransactionFn`\<`TransactionSerializable`\> = `SerializeTransactionFn`\<`TransactionSerializable`\>

• **transaction** _extends_ `OneOf`\<`TransactionSerializable`\> = `Parameters`\<`serializer`\>\[`0`\]

###### Parameters

###### transaction

`transaction`

###### options?

###### serializer

`serializer`

###### Returns

`Promise`\<`IsNarrowable`\<`TransactionSerialized`\<`GetTransactionType`\<`transaction`\>\>, \`0x$\{string\}\`\> *extends* `true` ? `TransactionSerialized`\<`GetTransactionType`\<`transaction`\>\> : \`0x$\{string\}\`\>

##### signTypedData()

> **signTypedData**: \<`typedData`, `primaryType`\>(`parameters`) => `Promise`\<\`0x$\{string\}\`\>

###### Type Parameters

• **typedData** _extends_ `Record`\<`string`, `unknown`\> \| \{`[key: `uint248[${string}]`]`: `undefined`; `[key: `uint240[${string}]`]`: `undefined`; `[key: `uint232[${string}]`]`: `undefined`; `[key: `uint224[${string}]`]`: `undefined`; `[key: `uint216[${string}]`]`: `undefined`; `[key: `uint208[${string}]`]`: `undefined`; `[key: `uint200[${string}]`]`: `undefined`; `[key: `uint192[${string}]`]`: `undefined`; `[key: `uint184[${string}]`]`: `undefined`; `[key: `uint176[${string}]`]`: `undefined`; `[key: `uint168[${string}]`]`: `undefined`; `[key: `uint160[${string}]`]`: `undefined`; `[key: `uint152[${string}]`]`: `undefined`; `[key: `uint144[${string}]`]`: `undefined`; `[key: `uint136[${string}]`]`: `undefined`; `[key: `uint128[${string}]`]`: `undefined`; `[key: `uint120[${string}]`]`: `undefined`; `[key: `uint112[${string}]`]`: `undefined`; `[key: `uint104[${string}]`]`: `undefined`; `[key: `uint96[${string}]`]`: `undefined`; `[key: `uint88[${string}]`]`: `undefined`; `[key: `uint80[${string}]`]`: `undefined`; `[key: `uint72[${string}]`]`: `undefined`; `[key: `uint64[${string}]`]`: `undefined`; `[key: `uint56[${string}]`]`: `undefined`; `[key: `uint48[${string}]`]`: `undefined`; `[key: `uint40[${string}]`]`: `undefined`; `[key: `uint32[${string}]`]`: `undefined`; `[key: `uint24[${string}]`]`: `undefined`; `[key: `uint16[${string}]`]`: `undefined`; `[key: `uint[${string}]`]`: `undefined`; `[key: `int256[${string}]`]`: `undefined`; `[key: `int248[${string}]`]`: `undefined`; `[key: `int240[${string}]`]`: `undefined`; `[key: `int232[${string}]`]`: `undefined`; `[key: `int224[${string}]`]`: `undefined`; `[key: `int216[${string}]`]`: `undefined`; `[key: `int208[${string}]`]`: `undefined`; `[key: `int200[${string}]`]`: `undefined`; `[key: `int192[${string}]`]`: `undefined`; `[key: `int184[${string}]`]`: `undefined`; `[key: `int176[${string}]`]`: `undefined`; `[key: `int168[${string}]`]`: `undefined`; `[key: `int160[${string}]`]`: `undefined`; `[key: `int152[${string}]`]`: `undefined`; `[key: `int144[${string}]`]`: `undefined`; `[key: `int136[${string}]`]`: `undefined`; `[key: `int128[${string}]`]`: `undefined`; `[key: `int120[${string}]`]`: `undefined`; `[key: `int112[${string}]`]`: `undefined`; `[key: `int104[${string}]`]`: `undefined`; `[key: `int96[${string}]`]`: `undefined`; `[key: `int88[${string}]`]`: `undefined`; `[key: `int80[${string}]`]`: `undefined`; `[key: `int72[${string}]`]`: `undefined`; `[key: `int64[${string}]`]`: `undefined`; `[key: `int56[${string}]`]`: `undefined`; `[key: `int48[${string}]`]`: `undefined`; `[key: `int40[${string}]`]`: `undefined`; `[key: `int32[${string}]`]`: `undefined`; `[key: `int24[${string}]`]`: `undefined`; `[key: `int16[${string}]`]`: `undefined`; `[key: `int8[${string}]`]`: `undefined`; `[key: `int[${string}]`]`: `undefined`; `[key: `bytes31[${string}]`]`: `undefined`; `[key: `bytes30[${string}]`]`: `undefined`; `[key: `bytes29[${string}]`]`: `undefined`; `[key: `bytes28[${string}]`]`: `undefined`; `[key: `bytes27[${string}]`]`: `undefined`; `[key: `bytes26[${string}]`]`: `undefined`; `[key: `bytes25[${string}]`]`: `undefined`; `[key: `bytes24[${string}]`]`: `undefined`; `[key: `bytes22[${string}]`]`: `undefined`; `[key: `bytes21[${string}]`]`: `undefined`; `[key: `bytes20[${string}]`]`: `undefined`; `[key: `bytes19[${string}]`]`: `undefined`; `[key: `bytes17[${string}]`]`: `undefined`; `[key: `bytes16[${string}]`]`: `undefined`; `[key: `bytes15[${string}]`]`: `undefined`; `[key: `bytes14[${string}]`]`: `undefined`; `[key: `bytes13[${string}]`]`: `undefined`; `[key: `bytes12[${string}]`]`: `undefined`; `[key: `bytes11[${string}]`]`: `undefined`; `[key: `bytes9[${string}]`]`: `undefined`; `[key: `bytes8[${string}]`]`: `undefined`; `[key: `bytes7[${string}]`]`: `undefined`; `[key: `bytes6[${string}]`]`: `undefined`; `[key: `bytes4[${string}]`]`: `undefined`; `[key: `bytes3[${string}]`]`: `undefined`; `[key: `bytes2[${string}]`]`: `undefined`; `[key: `bytes23[${string}]`]`: `undefined`; `[key: `bytes10[${string}]`]`: `undefined`; `[key: `bytes5[${string}]`]`: `undefined`; `[key: `bytes18[${string}]`]`: `undefined`; `[key: `bytes1[${string}]`]`: `undefined`; `[key: `bytes[${string}]`]`: `undefined`; `[key: `uint8[${string}]`]`: `undefined`; `[key: `bool[${string}]`]`: `undefined`; `[key: `bytes32[${string}]`]`: `undefined`; `[key: `uint256[${string}]`]`: `undefined`; `[key: `address[${string}]`]`: `undefined`; `[key: `function[${string}]`]`: `undefined`; `[key: `string[${string}]`]`: `undefined`; `[key: string]`: readonly `TypedDataParameter`[]; `address`: `undefined`;`bool`: `undefined`;`bytes`: `undefined`;`bytes1`: `undefined`;`bytes10`: `undefined`;`bytes11`: `undefined`;`bytes12`: `undefined`;`bytes13`: `undefined`;`bytes14`: `undefined`;`bytes15`: `undefined`;`bytes16`: `undefined`;`bytes17`: `undefined`;`bytes18`: `undefined`;`bytes19`: `undefined`;`bytes2`: `undefined`;`bytes20`: `undefined`;`bytes21`: `undefined`;`bytes22`: `undefined`;`bytes23`: `undefined`;`bytes24`: `undefined`;`bytes25`: `undefined`;`bytes26`: `undefined`;`bytes27`: `undefined`;`bytes28`: `undefined`;`bytes29`: `undefined`;`bytes3`: `undefined`;`bytes30`: `undefined`;`bytes31`: `undefined`;`bytes32`: `undefined`;`bytes4`: `undefined`;`bytes5`: `undefined`;`bytes6`: `undefined`;`bytes7`: `undefined`;`bytes8`: `undefined`;`bytes9`: `undefined`;`int104`: `undefined`;`int112`: `undefined`;`int120`: `undefined`;`int128`: `undefined`;`int136`: `undefined`;`int144`: `undefined`;`int152`: `undefined`;`int16`: `undefined`;`int160`: `undefined`;`int168`: `undefined`;`int176`: `undefined`;`int184`: `undefined`;`int192`: `undefined`;`int200`: `undefined`;`int208`: `undefined`;`int216`: `undefined`;`int224`: `undefined`;`int232`: `undefined`;`int24`: `undefined`;`int240`: `undefined`;`int248`: `undefined`;`int256`: `undefined`;`int32`: `undefined`;`int40`: `undefined`;`int48`: `undefined`;`int56`: `undefined`;`int64`: `undefined`;`int72`: `undefined`;`int8`: `undefined`;`int80`: `undefined`;`int88`: `undefined`;`int96`: `undefined`;`string`: `undefined`;`uint104`: `undefined`;`uint112`: `undefined`;`uint120`: `undefined`;`uint128`: `undefined`;`uint136`: `undefined`;`uint144`: `undefined`;`uint152`: `undefined`;`uint16`: `undefined`;`uint160`: `undefined`;`uint168`: `undefined`;`uint176`: `undefined`;`uint184`: `undefined`;`uint192`: `undefined`;`uint200`: `undefined`;`uint208`: `undefined`;`uint216`: `undefined`;`uint224`: `undefined`;`uint232`: `undefined`;`uint24`: `undefined`;`uint240`: `undefined`;`uint248`: `undefined`;`uint256`: `undefined`;`uint32`: `undefined`;`uint40`: `undefined`;`uint48`: `undefined`;`uint56`: `undefined`;`uint64`: `undefined`;`uint72`: `undefined`;`uint8`: `undefined`;`uint80`: `undefined`;`uint88`: `undefined`;`uint96`: `undefined`; \}

• **primaryType** _extends_ `string` \| `number` \| `symbol` = keyof `typedData`

###### Parameters

###### parameters

`TypedDataDefinition`\<`typedData`, `primaryType`\>

###### Returns

`Promise`\<\`0x$\{string\}\`\>

##### source

> **source**: `"privateKey"`

##### type

> **type**: `"local"`

#### Implementation of

[`ISdkClient`](../interfaces/ISdkClient.md).[`createPrivateKeyAccount`](../interfaces/ISdkClient.md#createprivatekeyaccount)

#### Defined in

[packages/core/src/client.ts:36](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/client.ts#L36)
