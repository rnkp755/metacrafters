# Basic ERC20 Token Implementation (Metacrafters)

Create a ERC20 token and deploy it on the Avalanche network for Degen Gaming. The smart contract should have the following functionality:

- Minting new tokens: The platform should be able to create new tokens and distribute them to players as rewards. Only the owner can mint tokens.
- Transferring tokens: Players should be able to transfer their tokens to others.
- Redeeming tokens: Players should be able to redeem their tokens for items in the in-game store.
- Checking token balance: Players should be able to check their token balance at any time.
- Burning tokens: Anyone should be able to burn tokens, that they own, that are no longer needed.


## Description

  

This Solidity code defines a smart contract named `Metacrafter` that is an ERC-20 token with some additional functionalities like minting, transferring, and burning tokens. It also allows for the redemption of certain items (represented by their prices in this case) based on the balance of the user.

1. **Import Statements**: The code starts by importing two OpenZeppelin smart contracts - `ERC20` and `Ownable`, which provide essential functionalities for an ERC-20 token (like minting, transferring, etc.) and ownership functionality respectively.

2. **Contract Definition**: The contract `Metacrafter` is defined as a subcontract of both `ERC20` and `Ownable` contracts. This means it inherits all the functions from these base contracts. It also includes a mapping named `Prices` that associates items with their prices.

3. **Constructor**: The constructor initializes the contract by calling the parent constructors of `ERC20` and `Ownable`, and sets up some initial values for the `Prices` mapping. 

4. **Minting Function**: The function `mintDGN(address _to, uint256 _amount)` allows only the owner to mint new tokens (add them to an account).

5. **Transferring Function**: The function `transferDGN(address _to, uint256 _amount)` enables a user to transfer tokens from their own balance to another address. It requires that the sender has enough balance.

6. **Showing Shop Items Function**: This is an external view function named `showShopItems()` which returns a string message containing available items and their prices. The information is hardcoded in this contract but it could be stored on chain if required. 

7. **Redeem Function**: `redeemDGN(uint256 _item)` function allows users to redeem certain items based on the price set in the Prices mapping. It requires that the user has enough balance and the item is available. The owner of the contract gets all the money from these redemptions.

8. **Burn Function**: This function `burnDGN(uint256 _amount)` allows a user to burn their tokens (remove them from an account). It requires that the sender has enough balance. 

9. **Get Balance Function**: The external view function `getBalance()` returns the current balance of the message sender.





## Getting Started

  

### Clone the repository

  

* Clone the repository or just download the zip file.

```

git clone https://github.com/rnkp755/metacrafters.git

```

  

### Executing program

  

* Go to [```https://remix.ethereum.org/```](https://remix.ethereum.org/). Basically it's an online ide to run and deploy smart contracts

* Drag and drop the **metacrafters.sol** file into remix's workspace.

* Compile it with the help of solidity compiler button in sidebar.

* Deploy it by clicking the button below to compiler button.

* You must have Metamask installed and connected to Avalanche Fuji testnets.

* Test the functions by providing appropriate values to it.

  

## Authors

  

Contributor name and contact info.

  

Raushan Kumar Thakur

[@hackerraushan](https://linkedin.com/in/hackerraushan)