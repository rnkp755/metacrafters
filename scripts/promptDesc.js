const { ethers } = require("hardhat");
require('dotenv').config()
async function main() {
      const [deployer] = await ethers.getSigners();
      const MyNFT = await ethers.getContractFactory("MyNFT");
      const myNFT = await MyNFT.attach(
            "0x7C930bF63f2eE1110696c7c12f061850392F889d",
      );
      const prompt = await myNFT.promptDescription(0);

      console.log(`Prompt Description: ${prompt}`);
}

main().catch((error) => {
      console.error(error);
      process.exitCode = 1;
});