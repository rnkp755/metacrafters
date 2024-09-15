// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
require("dotenv").config();
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MyNFT.json");
const contractAddress = "0x7C930bF63f2eE1110696c7c12f061850392F889d"; // place your erc20 contract address here
const contractABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0x421DbB7B5dFCb112D7a13944DeFB80b28eC5D22C";
const walletAddress = "0x7411F86D10173876eCa0c1aE850A771230AA167f"; // place your public address for your wallet here
const toAddress = "0x0ab671A61d1Ac32df09739A4E0111f5bcB921306"; // place your public address for your wallet here

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`Using deployer account: ${deployer.address}`);

  const myNFT = await hre.ethers.getContractAt(contractABI, contractAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC721RootAddress,
  );

  const tokenIds = [0, 1, 2, 3, 4];

  for (let i = 0; i < tokenIds.length; i++) {
    try {
      // Approve the NFT to be transferred
      await myNFT.approve(fxERC721RootAddress, tokenIds[i]);
      console.log(`Approved token ${tokenIds[i]} for transfer`);

      // Transfer the NFT to Ihe Bridge using safeTransferFrom
      await myNFT.transferFrom(walletAddress, toAddress, tokenIds[i]);

      console.log(`Transferred token ${tokenIds[i]} to the bridge `);
    } catch (error) {
      console.error(`Error processing token ${tokenIds[i]}: ${error.message}`);
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
