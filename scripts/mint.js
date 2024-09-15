// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
// const tokenAddress = ""; // place your erc20 contract address here
// const tokenABI = tokenContractJSON.abi;
// const walletAddress = ""; // place your public address for your wallet here

const { ethers } = require("hardhat");
require('dotenv').config()
const MyNFTArtifact = require("../artifacts/contracts/MetaToken.sol/MyNFT.json");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const metadataURIs = [
    "https://chocolate-tough-llama-854.mypinata.cloud/ipfs/QmZr8RpSBbfPzWjDBRXpj3AoWVHGfiwbHt7gXm1BmpX9qz?filename=first.jpeg",
    "https://chocolate-tough-llama-854.mypinata.cloud/ipfs/QmdvN14M6KNz7JaUtxH1guo6hypDfASqni2C9dbwjFbaZ2?filename=second.jpeg",
    "https://chocolate-tough-llama-854.mypinata.cloud/ipfs/Qmc9zjjKaRZPnmHVD4qw7cU1DFbReTgWWQP4e844EFLVxx?filename=third.jpeg",
    "https://chocolate-tough-llama-854.mypinata.cloud/ipfs/Qmcpv9zvzYV4vRmTFPBh35YVT714uErNpdbHDY9uecmqXQ?filename=fourth.jpeg",
    "https://chocolate-tough-llama-854.mypinata.cloud/ipfs/Qmb7tvtbr71LuXhbcDcCJpfjF2foVJ5GkBC2DZBqdKpgHX?filename=fifth.jpeg",
  ];

  const deployedContractAddress = "0x7C930bF63f2eE1110696c7c12f061850392F889d";


  const myNFT = new ethers.Contract(
    deployedContractAddress,
    MyNFTArtifact.abi,
    deployer,
  );

  console.log("Interacting with contract at address:", deployedContractAddress);

  for (let i = 0; i < metadataURIs.length; i++) {
    await myNFT.mint(deployer.address, i, metadataURIs[i]);
    console.log(`Minted NFT ${i} to ${deployer.address}`);
  }
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
