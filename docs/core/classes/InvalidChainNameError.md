[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / InvalidChainNameError

# Class: InvalidChainNameError

Custom error classes

## Extends

- `JpycSdkError`

## Constructors

### new InvalidChainNameError()

> **new InvalidChainNameError**(`chainName`): [`InvalidChainNameError`](InvalidChainNameError.md)

#### Parameters

##### chainName

`string`

#### Returns

[`InvalidChainNameError`](InvalidChainNameError.md)

#### Overrides

`JpycSdkError.constructor`

#### Defined in

packages/core/src/utils/errors.ts:14

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`JpycSdkError.cause`

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

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

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`JpycSdkError.prepareStackTrace`

#### Defined in

node_modules/@types/node/globals.d.ts:143

---

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`JpycSdkError.stackTraceLimit`

#### Defined in

node_modules/@types/node/globals.d.ts:145

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`JpycSdkError.captureStackTrace`

#### Defined in

node_modules/@types/node/globals.d.ts:136
