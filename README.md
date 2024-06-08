
  

# Smart Contract Project (Metacrafters)

  

The solidity program is a simple bidding platform that implements the `require()`, `assert()` and `revert()` statements.

  

## Description

  

The provided Solidity code represents a smart contract named MyBiddingPlatform written in Solidity programming language for the Ethereum blockchain platform. This contract facilitates bidding on products where each product has a unique identifier (id), a name (name), and a current price (currentPrice). The contract owner or admin can add new products by calling the addProduct function with name, id, and current price as arguments.

  

In terms of bidding, anyone can bid on a product by calling the bid function with a product id (id) and a bid amount (_amount). If a bid is successful (i.e., it is higher than the current price), it will replace the current price of the product.

  

The contract includes two public state variables:

1. admin which holds the address of the contract owner or admin;

2. products which is an array of Product structs containing name, id, and currentPrice fields.

  

The Product struct is defined inside MyBiddingPlatform contract. It is used to represent a product in the bidding platform.

  

In addition, there is a constructor function which sets the admin address when a new instance of MyBiddingPlatform is created.

  

The addProduct function checks if the sender of the transaction is the admin before allowing addition of a new product. It also ensures that each product has a unique id by comparing it with the ids of all existing products in the products array.

  

The bid function checks if a bid is higher than the current price of a product before updating it. It uses a for loop to iterate over all products in the products array until it finds a product with a matching id. If no matching product is found, it reverts the transaction with an error message indicating "Product with specified id is not found".

  

Finally, both addProduct and bid functions include assertions ensuring their conditions hold true after their execution. If these conditions fail, it means there's an error in their logic or in their assumptions (e.g., unique id for new product or higher bid than current price). Assertions in Solidity are used for internal error checking during testing. They don't affect transaction execution or gas cost but can be used for debugging purposes.

  

1.  `// SPDX-License-Identifier: MIT` - This is a comment that identifies the license of your contract under which it is released. The license is MIT, which is a commonly used open source license for software projects.

2.  `pragma solidity ^0.8.0;` - This line sets the compiler version of this contract. The `^0.8.0` means this contract requires a compiler version of at least 0.8.0 but less than 0.9.0.

3.  `contract MyBiddingPlatform { ... }` - This creates a new contract named MyBiddingPlatform. The contract has its own scope, so variables defined inside it won't conflict with other contracts or global variables.

4.  `function addProduct(string memory _name, uint _id, uint _currentPrice) public { ... }` - The function `addProduct` is a public function in the smart contract `MyBiddingPlatform` which allows an administrator (the one who deployed the contract) to add new products to the bidding platform.


	   Here's a step-by-step breakdown of what it does:

	* It is declared with two parameters - `_name` (a string representing the name of the product), `_id` (a unique identifier for the product), and `_currentPrice` (the initial price of the product).

	* It uses the `require` function from Solidity's built-in functionality to check if the function caller (`msg.sender`) is the same as the admin (the one who deployed the contract). If it's not, it reverts the transaction with an error message "Unauthorized access !!".

	* It creates a new instance of a `Product` struct with the given parameters and assigns it to a new local variable `newProduct`.

	* It then pushes (adds) the new product to the end of the public array `products` using the `push` function.

	* Finally, it uses an `assert` statement to confirm if indeed the length of the products array has increased by 1 after adding a new product. If it does not, it reverts the transaction with an error message.

  

     The purpose of this function is to allow authorized users (in this case, the admin) to add new products for bidding in the bidding platform.

  

6.  `function bid(uint _id, uint _amount) { ... }` - This function is named "bid" and it is used by users to place a bid on a product listed on the MyBiddingPlatform smart contract.

  

     Here's a breakdown of what it does:

  

	- The function accepts two parameters - a product id (_id) of type uint and an amount (_amount) of type uint which represents the bid amount by a user.

	  

	- It checks if a product with a given id exists in the "products" array by iterating over all elements of the array using a for loop.

	  

	- If a product is found with a matching id (_id), it then checks if the bid amount (_amount) is higher than the current highest bid on the product (products[i].currentPrice). If it is higher, then it updates the currentPrice of the product with the new bid amount (_amount).

	  

	- If no product is found with a matching id (_id), it reverts with a message saying "Product with specified id is not found."

	  

	- If a product is found with a matching id (_id) and a valid bid is placed (i.e., _amount > products[i].currentPrice), then it asserts that products[i].currentPrice is indeed equal to _amount (indicating that it was correctly updated).

  

In summary, the bid function allows users to place bids on products listed on a platform. If a bid is successful (i.e., it is higher than the current highest bid), it updates the highest bid for a particular product in the platform. If a product id is invalid or if no such product exists, it reverts with an error message.

  
  

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

* Test the functions by providing appropriate values to it.

  

## Authors

  

Contributor name and contact info.

  

Raushan Kumar Thakur

[@hackerraushan](https://linkedin.com/in/hackerraushan)