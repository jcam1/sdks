import { randomBytes } from 'crypto';
import { Uint8, Uint256 } from 'soltypes';
import { hexToNumber, slice, toHex } from 'viem';

import { LOCAL_PROXY_ADDRESS, SUPPORTED_CHAINS } from '@jpyc/sdk-core';
import { account, client, jpyc, jpycSpender, receiver } from './';

async function main(): Promise<void> {
  // 1. Prepare typed data (for transfer)
  const domain = {
    name: 'JPY Coin',
    version: '1',
    chainId: BigInt(SUPPORTED_CHAINS.local.mainnet.id),
    verifyingContract: LOCAL_PROXY_ADDRESS,
  } as const;
  const value = 100n;
  const validAfter = 0n;
  const validBefore = BigInt(Date.now()) / 1000n + 3600n;
  const nonce = toHex(randomBytes(32));

  // 2. Sign data  (for transfer)
  const signatureTransfer = await client.signTypedData({
    account,
    domain,
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' },
      ],
      TransferWithAuthorization: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'validAfter', type: 'uint256' },
        { name: 'validBefore', type: 'uint256' },
        { name: 'nonce', type: 'bytes32' },
      ],
    },
    primaryType: 'TransferWithAuthorization',
    message: {
      from: account.address,
      to: receiver,
      value: value,
      validAfter: validAfter,
      validBefore: validBefore,
      nonce: nonce,
    },
  });

  const vTransfer = slice(signatureTransfer, 64, 65);
  const rTransfer = slice(signatureTransfer, 0, 32);
  const sTransfer = slice(signatureTransfer, 32, 64);

  // 3. Sign data (for cancellation)
  const signatureCancellation = await client.signTypedData({
    account,
    domain,
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' },
      ],
      CancelAuthorization: [
        { name: 'authorizer', type: 'address' },
        { name: 'nonce', type: 'bytes32' },
      ],
    },
    primaryType: 'CancelAuthorization',
    message: {
      authorizer: account.address,
      nonce: nonce,
    },
  });

  const vCancellation = slice(signatureCancellation, 64, 65);
  const rCancellation = slice(signatureCancellation, 0, 32);
  const sCancellation = slice(signatureCancellation, 32, 64);

  // 4. Cancel authorization
  await jpyc.cancelAuthorization({
    authorizer: account.address,
    nonce: nonce,
    v: Uint8.from(hexToNumber(vCancellation).toString()),
    r: rCancellation,
    s: sCancellation,
  });

  // 5. Check if transfer has been cancelled
  try {
    await jpycSpender.transferWithAuthorization({
      from: account.address,
      to: receiver,
      value: Uint256.from(value.toString()),
      validAfter: Uint256.from(validAfter.toString()),
      validBefore: Uint256.from(validBefore.toString()),
      nonce: nonce,
      v: Uint8.from(hexToNumber(vTransfer).toString()),
      r: rTransfer,
      s: sTransfer,
    });
  } catch (error) {
    console.log(`Meta-transaction has been cancelled.\n\n${error}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
