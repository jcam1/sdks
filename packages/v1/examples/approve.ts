import { Uint256 } from 'soltypes';

import {
  account,
  jpyc,
} from '.';
import { HARDHAT_PREDEFINED_ADDRESSES } from './constants';

async function main() {
  const spender = HARDHAT_PREDEFINED_ADDRESSES[1];

  // 1. Approve to spend allowance
  await jpyc.approve({
    spender: spender,
    value: Uint256.from('1000'),
  });

  // 2. Check allowance
  const allowance = await jpyc.allowance({
    owner: account.address,
    spender: spender,
  });
  console.log(`spender allowance: ${allowance}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
