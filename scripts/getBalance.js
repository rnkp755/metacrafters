// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
require('dotenv').config()
async function main() {
  const [deployer] = await ethers.getSigners();
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(
    "0x7C930bF63f2eE1110696c7c12f061850392F889d",
  );

  const balance = await myNFT.balanceOf(
    "0x7411F86D10173876eCa0c1aE850A771230AA167f",
  );
  console.log(` Balance of recipient: ${balance.toString()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
