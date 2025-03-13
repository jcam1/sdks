[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / IJPYC

# Interface: IJPYC

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:49

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:177

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:40

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:162

---

### configureMinter()

> **configureMinter**(`params`): `Promise`\<\`0x$\{string\}\`\>

Configures a minter.

#### Parameters

##### params

###### minter

\`0x$\{string\}\`

###### minterAllowedAmount

`Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

packages/core/src/interfaces/jpyc.ts:70

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:195

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:186

---

### isMinter()

> **isMinter**(`params`): `Promise`\<`boolean`\>

Returns true if the given address is a minter.

#### Parameters

##### params

###### account

\`0x$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

true if minter, false otherwise

#### Defined in

packages/core/src/interfaces/jpyc.ts:17

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:79

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:25

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:57

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:209

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:140

---

### totalSupply()

> **totalSupply**(): `Promise`\<`Uint256`\>

Returns total supply of JPYC tokens.

#### Returns

`Promise`\<`Uint256`\>

total supply

#### Defined in

packages/core/src/interfaces/jpyc.ts:32

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:88

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:98

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

#### Defined in

packages/core/src/interfaces/jpyc.ts:114
