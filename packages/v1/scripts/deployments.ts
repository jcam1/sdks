import hre from 'hardhat';

import { jpycV2Module } from '../ignition/modules/jpyc-v2';

async function main(): Promise<void> {
  await hre.ignition.deploy(jpycV2Module);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
