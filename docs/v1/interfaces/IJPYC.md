[**@jpyc/sdk-v1**](../README.md) • **Docs**

---

[@jpyc/sdk-v1](../globals.md) / IJPYC

# Interface: IJPYC

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:49](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L49)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:177](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L177)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:40](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L40)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:162](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L162)

---

### configureMinter()

> **configureMinter**(`params`): `Promise`\<\`0x$\{string\}\`\>

Configures a minter.

#### Parameters

• **params**

• **params.minter**: \`0x$\{string\}\`

• **params.minterAllowedAmount**: `Uint256`

#### Returns

`Promise`\<\`0x$\{string\}\`\>

transaction hash

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:70](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L70)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:195](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L195)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:186](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L186)

---

### isMinter()

> **isMinter**(`params`): `Promise`\<`boolean`\>

Returns true if the given address is a minter.

#### Parameters

• **params**

• **params.account**: \`0x$\{string\}\`

#### Returns

`Promise`\<`boolean`\>

true if minter, false otherwise

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:17](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L17)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:79](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L79)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:25](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L25)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:57](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L57)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:209](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L209)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:140](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L140)

---

### totalSupply()

> **totalSupply**(): `Promise`\<`Uint256`\>

Returns total supply of JPYC tokens.

#### Returns

`Promise`\<`Uint256`\>

total supply

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:32](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L32)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:88](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L88)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:98](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L98)

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

#### Defined in

[packages/v1/src/interfaces/jpyc.ts:114](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/interfaces/jpyc.ts#L114)
