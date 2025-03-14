[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / IJPYC

# Interface: IJPYC

## Methods

### allowance()

> **allowance**(`params`): `Promise`\<`number`\>

Returns allowance of a spender over owner's tokens (for transferring).

#### Parameters

##### params

###### owner

\`0x$\{string\}\`

###### spender

\`0x$\{string\}\`

#### Returns

`Promise`\<`number`\>

spender allowance

#### Defined in

[packages/core/src/interfaces/jpyc.ts:49](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L49)

---

### approve()

> **approve**(`params`): `Promise`\<\`0x$\{string\}\`\>

Sets allowance of a spender over owner's tokens.

#### Parameters

##### params

###### spender

\`0x$\{string\}\`

###### value

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:177](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L177)

---

### balanceOf()

> **balanceOf**(`params`): `Promise`\<`number`\>

Returns balance of an account.

#### Parameters

##### params

###### account

\`0x$\{string\}\`

#### Returns

`Promise`\<`number`\>

account balance

#### Defined in

[packages/core/src/interfaces/jpyc.ts:40](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L40)

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

[packages/core/src/interfaces/jpyc.ts:162](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L162)

---

### configureMinter()

> **configureMinter**(`params`): `Promise`\<\`0x$\{string\}\`\>

Configures a minter.

#### Parameters

##### params

###### minter

\`0x$\{string\}\`

###### minterAllowedAmount

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:70](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L70)

---

### decreaseAllowance()

> **decreaseAllowance**(`params`): `Promise`\<\`0x$\{string\}\`\>

Decreases allowance.

#### Parameters

##### params

###### decrement

`number`

###### spender

\`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:195](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L195)

---

### increaseAllowance()

> **increaseAllowance**(`params`): `Promise`\<\`0x$\{string\}\`\>

Increases allowance.

#### Parameters

##### params

###### increment

`number`

###### spender

\`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:186](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L186)

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

[packages/core/src/interfaces/jpyc.ts:17](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L17)

---

### mint()

> **mint**(`params`): `Promise`\<\`0x$\{string\}\`\>

Mints tokens.

#### Parameters

##### params

###### amount

`number`

###### to

\`0x$\{string\}\`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:79](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L79)

---

### minterAllowance()

> **minterAllowance**(`params`): `Promise`\<`number`\>

Returns allowance of a minter (for minting).

#### Parameters

##### params

###### minter

\`0x$\{string\}\`

#### Returns

`Promise`\<`number`\>

minter allowance

#### Defined in

[packages/core/src/interfaces/jpyc.ts:25](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L25)

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

[packages/core/src/interfaces/jpyc.ts:57](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L57)

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

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:209](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L209)

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

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:140](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L140)

---

### totalSupply()

> **totalSupply**(): `Promise`\<`number`\>

Returns total supply of JPYC tokens.

#### Returns

`Promise`\<`number`\>

total supply

#### Defined in

[packages/core/src/interfaces/jpyc.ts:32](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L32)

---

### transfer()

> **transfer**(`params`): `Promise`\<\`0x$\{string\}\`\>

Transfers tokens (directly).

#### Parameters

##### params

###### to

\`0x$\{string\}\`

###### value

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:88](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L88)

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

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:98](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L98)

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

`number`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/core/src/interfaces/jpyc.ts:114](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/interfaces/jpyc.ts#L114)
