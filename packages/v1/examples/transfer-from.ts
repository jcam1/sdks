import { Uint256 } from 'soltypes';

import {
  account,
  APPROVED_ADDRESS,
  jpyc,
  RECEIVER_ADDRESS,
} from './';

async function main() {
  // 1. Approve to spend allowance
  await jpyc.approve({
    spender: APPROVED_ADDRESS,
    value: Uint256.from('1000'),
  });

  // 2. Check allowance
  const allowance = await jpyc.allowance({
    owner: account.address,
    spender: APPROVED_ADDRESS,
  });
  console.log(`allowance: ${allowance}`);

  // TODO: FIx below

  // 3. Transfer tokens (from the approved address)
  await jpyc.transferFrom({
    from: APPROVED_ADDRESS,
    to: RECEIVER_ADDRESS,
    value: Uint256.from('200'),
  });

  // 4. Check balances
  const balanceSender = await jpyc.balanceOf({
    account: account.address,
  });
  console.log(`balance (sender): ${balanceSender}`);

  const balanceSpender = await jpyc.balanceOf({
    account: account.address,
  });
  console.log(`balance (spender): ${balanceSpender}`);

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
