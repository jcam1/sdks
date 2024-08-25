[**@jpyc/sdk-v1**](../README.md) • **Docs**

---

[@jpyc/sdk-v1](../globals.md) / InvalidChainNameError

# Class: InvalidChainNameError

Custom error classes

## Extends

- `JpycSdkError`

## Constructors

### new InvalidChainNameError()

> **new InvalidChainNameError**(`chainName`): [`InvalidChainNameError`](InvalidChainNameError.md)

#### Parameters

• **chainName**: `string`

#### Returns

[`InvalidChainNameError`](InvalidChainNameError.md)

#### Overrides

`JpycSdkError.constructor`

#### Defined in

[packages/v1/src/errors.ts:14](https://github.com/jcam1/sdks/blob/30a458097273f9153f1e5c47ec2aa6b486eaf784/packages/v1/src/errors.ts#L14)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`JpycSdkError.cause`

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

---

### message

> **message**: `string`

#### Inherited from

`JpycSdkError.message`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

---

### name

> **name**: `string`

#### Inherited from

`JpycSdkError.name`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

---

### stack?

> `optional` **stack**: `string`

#### Inherited from

`JpycSdkError.stack`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

---

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`JpycSdkError.prepareStackTrace`

#### Defined in

packages/v1/node_modules/@types/node/globals.d.ts:28

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`JpycSdkError.stackTraceLimit`

#### Defined in

packages/v1/node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`JpycSdkError.captureStackTrace`

#### Defined in

packages/v1/node_modules/@types/node/globals.d.ts:21
