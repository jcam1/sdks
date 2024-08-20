import { Uint8, Uint256 } from 'soltypes';
import { hexToNumber, slice } from 'viem';

import { account, client, jpyc, spender } from './';
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
    Permit: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
      { name: 'value', type: 'uint256' },
      { name: 'nonce', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
    ],
  } as const;
  const value = 100n;
  const deadline = BigInt(Date.now()) / 1000n + 3600n;
  const nonce = await jpyc.nonces({ owner: account.address });

  // 2. Sign data
  const signature = await client.signTypedData({
    account,
    domain,
    types,
    primaryType: 'Permit',
    message: {
      owner: account.address,
      spender: spender,
      value: value,
      nonce: BigInt(nonce.toString()),
      deadline: deadline,
    },
  });

  const v = slice(signature, 64, 65);
  const r = slice(signature, 0, 32);
  const s = slice(signature, 32, 64);

  // 3. Permit (allows approvals via signatures)
  await jpyc.permit({
    owner: account.address,
    spender: spender,
    value: Uint256.from(value.toString()),
    deadline: Uint256.from(deadline.toString()),
    v: Uint8.from(hexToNumber(v).toString()),
    r: r,
    s: s,
  });

  // 4. Check allowance
  const allowance = await jpyc.allowance({
    owner: account.address,
    spender: spender,
  });
  console.log(`spender allowance: ${allowance.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
