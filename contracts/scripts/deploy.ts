import { ethers } from 'hardhat';

async function main() {
  const maxSupply = process.env.MAX_SUPPLY
    ? Number(process.env.MAX_SUPPLY)
    : 1000;

  if (Number.isNaN(maxSupply) || maxSupply <= 0) {
    throw new Error('MAX_SUPPLY must be a positive number');
  }

  const Badge = await ethers.getContractFactory('ChainCheckBadge');
  const badge = await Badge.deploy(maxSupply);
  await badge.waitForDeployment();

  console.log('ChainCheckBadge deployed to:', await badge.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
