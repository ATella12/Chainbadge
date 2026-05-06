import { ethers } from 'hardhat';
import { sendTransactionWithBuilderCode } from './builderAttribution';

async function main() {
  const maxSupply = process.env.MAX_SUPPLY
    ? Number(process.env.MAX_SUPPLY)
    : 1000;

  if (Number.isNaN(maxSupply) || maxSupply <= 0) {
    throw new Error('MAX_SUPPLY must be a positive number');
  }

  const Badge = await ethers.getContractFactory('ChainCheckBadge');
  const deployTx = await Badge.getDeployTransaction(maxSupply);
  const signer = await ethers.provider.getSigner();
  const tx = await signer.sendTransaction(sendTransactionWithBuilderCode(deployTx));
  const receipt = await tx.wait();

  if (!receipt?.contractAddress) {
    throw new Error('Deployment transaction did not produce a contract address');
  }

  console.log('ChainCheckBadge deployed to:', receipt.contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
