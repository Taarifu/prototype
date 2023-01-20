const hre = require("hardhat");

async function main() {
  const Taarifu = await hre.ethers.getContractFactory("Taarifu");
  const taarifuContract = await Taarifu.deploy();
  await taarifuContract.deployed();
  console.log("taarifuContract deployed to:", taarifuContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
