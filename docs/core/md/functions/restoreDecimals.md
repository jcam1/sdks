[**@jpyc/sdk-core**](../README.md)

---

[@jpyc/sdk-core](../globals.md) / restoreDecimals

# Function: restoreDecimals()

> **restoreDecimals**(`value`): `number`

Restores decimal places (mainly for display purpose).
e.g.)
10,000,000,000,000,000 -> 0.01
100,000,000,000,000,000,000 -> 100

## Parameters

### value

`Uint256`

uint256 value

## Returns

`number`

value as number (i.e., integer or decimal)

## Defined in

[packages/core/src/utils/math.ts:35](https://github.com/jcam1/sdks/blob/d7b0b75bf0a43a1290dddb92ba9a24223892592b/packages/core/src/utils/math.ts#L35)
