import { Uint256 } from 'soltypes';

import { account, jpyc } from './';

async function main(): Promise<void> {
  // 1. Configure a minter
  await jpyc.configureMinter({
    minter: account.address,
    minterAllowedAmount: Uint256.from('1000000'),
  });

  // 2. Check minter allowance
  const minterAllowance = await jpyc.minterAllowance({ minter: account.address });
  console.log(`minterAllowance: ${minterAllowance.toString()}`);

  // 3. Mint tokens
  await jpyc.mint({
    to: account.address,
    amount: Uint256.from('10000'),
  });

  // 4. Check total supply
  const totalSupply = await jpyc.totalSupply();
  console.log(`new totalSupply: ${totalSupply.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
