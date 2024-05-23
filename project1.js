// Create a NFT Collection

// Creating the variable to hold the NFTs
let nftCollection = [];

// Function for Creating the NFT object
function mintNFT(name, price) {
      let newNFT = {
            name: name,
            price: price
      };
      nftCollection.push(newNFT);
}

// Function for listing the NFTs
function listNFTs() {
      for (let i = 0; i < nftCollection.length; i++) {
            console.log((i + 1) + "th NFT is " + nftCollection[i].name + " and the price is " + nftCollection[i].price + ".");
      }
}

// Get no of NFTs
function getTotalSupply() {
      return nftCollection.length;
}

mintNFT("NFT1", 100);   // Adding NFTs
mintNFT("NFT2", 200);

listNFTs(); // Listing NFTs

console.log("Total NFTs: " + getTotalSupply());