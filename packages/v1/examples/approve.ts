import { Uint256 } from 'soltypes';

import { account, jpyc, spender } from './';

async function main(): Promise<void> {
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
  console.log(`spender allowance: ${allowance.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
