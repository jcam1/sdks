import { Uint8 } from 'soltypes';

import { account, jpyc } from './';

async function main() {
  // Initialize JPYC contract
  await jpyc.initialize({
    tokenName: 'JPY Coin',
    tokenSymbol: 'JPYC',
    tokenCurrency: 'Yen',
    tokenDecimals: Uint8.from('18'),
    newMinterAdmin: account.address,
    newPauser: account.address,
    newBlocklister: account.address,
    newRescuer: account.address,
    newOwner: account.address,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
