// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require('dotenv').config()
async function main() {
  const prompts = [
    "A beautiful woman with flowing, ornate hair that blends seamlessly with intricate organic shapes, flowers, and swirling patterns. Her hair should appear as if made from delicate tendrils and leaves, featuring vivid colors like orange, gold, and pink. The setting is ethereal, with a background hinting at a twilight sky and a reflective water body, capturing a magical, fantasy-like atmosphere",
    "A close-up portrait of a woman with deep, striking eyes, adorned with a floral crown and surrounded by otherworldly, swirling floral elements. The background can transition from deep blues and purples to lighter golden hues, evoking the cosmos. Soft light should highlight her face, with intricate details and textures in her hair and surrounding flora",
    "A stunning woman whose flowing hair transforms into vines and flowers, blending into the surroundings of an enchanted forest. The forest is illuminated by soft, glowing lights from distant fireflies and glowing mushrooms. The woman's expression is serene, and her eyes reflect the magic of the forest. Colors should be rich, with deep greens, golds, and soft pinks, capturing the peaceful yet mystical energy of the environment",
    "A regal woman standing amidst a magical garden filled with oversized blooming flowers, vines, and floating petals. Her gown is adorned with floral designs, blending into the surreal garden landscape. The scene is bathed in warm, golden light with hints of soft pink and lavender in the sky. Butterflies and tiny glowing orbs float around her, enhancing the dreamlike quality of the scene.",
    "A graceful woman in a floral dress standing near the edge of a cliff, surrounded by lush green landscapes and cascading waterfalls. Butterflies of various colors flutter around her as she stands in a serene pose. The backdrop should feature vibrant mountains, misty skies, and a meandering river flowing through the valley, evoking a dreamy, nature-filled world with a calm and peaceful atmosphere"
  ]

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy(prompts);

  await myNFT.waitForDeployment();

  console.log("MyNFT deployed to:", await myNFT.getAddress());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
