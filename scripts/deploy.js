const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying SimpleMultiSigWallet contract with account:", deployer.address);

  // Provide owners and required confirmations here or via constructor args dynamically
  // For deployment, we hardcode example owners (you may replace with your own addresses)
  const owners = [
    "0xYourOwnerAddress1",
    "0xYourOwnerAddress2",
    "0xYourOwnerAddress3"
  ];
  const requiredConfirmations = 2;

  const SimpleMultiSigWallet = await hre.ethers.getContractFactory("SimpleMultiSigWallet");
  const multiSigWallet = await SimpleMultiSigWallet.deploy(owners, requiredConfirmations);

  await multiSigWallet.deployed();

  console.log("SimpleMultiSigWallet deployed to:", multiSigWallet.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
