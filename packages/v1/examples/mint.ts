import { Uint256 } from 'soltypes';

import { account, jpyc } from './';

async function main() {
  // 1. Configure a minter
  await jpyc.configureMinter({
    minter: account.address,
    minterAllowedAmount: Uint256.from('1000000'),
  });

  // 2. Mint tokens
  await jpyc.mint({
    to: account.address,
    amount: Uint256.from('10000'),
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
