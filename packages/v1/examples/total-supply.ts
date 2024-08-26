import { jpyc } from './';

async function main(): Promise<void> {
  // Check total supply
  const totalSupply = await jpyc.totalSupply();
  console.log(`totalSupply: ${totalSupply.toString()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
