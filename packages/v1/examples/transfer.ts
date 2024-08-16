import { Uint256 } from 'soltypes';

import { account, jpyc, RECEIVER_ADDRESS } from './';

async function main() {
  // 1. Transfer tokens
  await jpyc.transfer({
    to: RECEIVER_ADDRESS,
    value: Uint256.from('100'),
  });

  // 2. Check balances
  const balanceSender = await jpyc.balanceOf({
    account: account.address,
  });
  console.log(`balance (sender): ${balanceSender}`);

  const balanceReceiver = await jpyc.balanceOf({
    account: RECEIVER_ADDRESS,
  });
  console.log(`balance (receiver): ${balanceReceiver}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
