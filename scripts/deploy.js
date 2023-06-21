//import the Hardhat package
const hre = require("hardhat");

async function main() {
 
 //deploy the contract 
  const nftContract = await hre.ethers.deployContract("NFTee");

 //wait for the contract to deploy 
  await nftContract.waitForDeployment();

//print address of deployed contract
  console.log("NFT Contract Address : ", nftContract.target);
}

//Call main function and catch if error found
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process(1);
});
