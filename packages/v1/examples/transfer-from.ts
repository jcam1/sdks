import { Uint256 } from 'soltypes';

import { account, jpyc, jpycSpender } from './';
import { receiver, spender } from './constants';

async function main(): Promise<void> {
  // 1. Transfer tokens (from the approved address)
  await jpycSpender.transferFrom({
    from: account.address,
    to: receiver,
    value: Uint256.from('200'),
  });

  // 2. Check balances
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
