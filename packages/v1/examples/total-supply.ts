import { jpyc } from './';

async function main() {
  // Check total supply
  const totalSupply = await jpyc.totalSupply();
  console.log(`totalSupply: ${totalSupply}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
