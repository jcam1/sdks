[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / removeDecimals

# Function: removeDecimals()

> **removeDecimals**(`value`): `Uint256`

Removes decimal places to make sure that only integer values live on-chain.
e.g.)
0.01 -> 10,000,000,000,000,000
100 -> 100,000,000,000,000,000,000

## Parameters

### value

`number`

integer or decimal value

## Returns

`Uint256`

value as uint256

## Defined in

[packages/core/src/utils/math.ts:23](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/utils/math.ts#L23)
