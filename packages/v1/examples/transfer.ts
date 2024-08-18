import { Uint256 } from 'soltypes';

import { account, jpyc } from './';
import { HARDHAT_PREDEFINED_ADDRESSES } from './constants';

async function main() {
  const receiver = HARDHAT_PREDEFINED_ADDRESSES[0];

  // 1. Transfer tokens
  await jpyc.transfer({
    to: receiver,
    value: Uint256.from('100'),
  });

  // 2. Check balances
  const balanceSender = await jpyc.balanceOf({
    account: account.address,
  });
  console.log(`balance (sender): ${balanceSender}`);

  const balanceReceiver = await jpyc.balanceOf({
    account: receiver,
  });
  console.log(`balance (receiver): ${balanceReceiver}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
