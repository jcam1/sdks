import { randomBytes } from 'crypto';
import { Uint8, Uint256 } from 'soltypes';
import { hexToNumber, slice, toHex } from 'viem';

import { account, client, jpyc, jpycSpender, receiver, spender } from './';
import { LOCAL_PROXY_ADDRESS, SUPPORTED_CHAINS } from '../../core';

async function main(): Promise<void> {
  // 1. Prepare typed data
  const domain = {
    name: 'JPY Coin',
    version: '1',
    chainId: BigInt(SUPPORTED_CHAINS.local.mainnet.id),
    verifyingContract: LOCAL_PROXY_ADDRESS,
  } as const;
  const types = {
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
  } as const;
  const value = 100n;
  const validAfter = 0n;
  const validBefore = BigInt(Date.now()) / 1000n + 3600n;
  const nonce = toHex(randomBytes(32));

  // 2. Sign data
  const signature = await client.signTypedData({
    account,
    domain,
    types,
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

  const v = slice(signature, 64, 65);
  const r = slice(signature, 0, 32);
  const s = slice(signature, 32, 64);

  // 3. Transfer tokens with signature
  await jpycSpender.transferWithAuthorization({
    from: account.address,
    to: receiver,
    value: Uint256.from(value.toString()),
    validAfter: Uint256.from(validAfter.toString()),
    validBefore: Uint256.from(validBefore.toString()),
    nonce: nonce,
    v: Uint8.from(hexToNumber(v).toString()),
    r: r,
    s: s,
  });

  // 4. Check balances
  const balanceSender = await jpyc.balanceOf({
    account: account.address,
  });
  console.log(`balance (sender): ${balanceSender.toString()}`);

  const balanceSpender = await jpyc.balanceOf({
    account: spender,
  });
  console.log(`balance (spender): ${balanceSpender.toString()}`);

  const balanceReceiver = await jpyc.balanceOf({
    account: receiver,
  });
  console.log(`balance (receiver): ${balanceReceiver.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
