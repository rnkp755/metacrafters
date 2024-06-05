
# Smart Contract Project (Metacrafters)

The solidity program is a simple contract that implements the `require()`, `assert()` and `revert()` statements.

## Description

This is a simple contract in Solidity for an account system where users can deposit ether into their account balance. Here's a line by line explanation of each part of your contract:

1. `// SPDX-License-Identifier: MIT` - This is a comment that identifies the license of your contract under which it is released. The license is MIT, which is a commonly used open source license for software projects.
2. `pragma solidity ^0.8.0;` - This line sets the compiler version of this contract. The `^0.8.0` means this contract requires a compiler version of at least 0.8.0 but less than 0.9.0.
3. `contract MyContract { ... }` - This creates a new contract named MyContract. The contract has its own scope, so variables defined inside it won't conflict with other contracts or global variables.
4. `mapping(address => uint) public account;` - This line defines a public mapping named account which maps addresses to uints (unsigned integers). This means it creates a data structure where you can store uint values for each address. The `public` keyword makes these variables readable from outside of this contract.
5. `function deposit(address _address, uint _value) public { ... }` - This function allows an account owner (the one who calls this function) to deposit ether into their account balance by specifying an address (the account owner's address) and a value (the amount of ether they want to deposit). The `public` keyword means this function can be called by anyone (account owner). Inside this function, there is a `require` statement which checks if the value of `_value` is greater than 100. If it's not, it will revert (cancel) the transaction with an error message "Deposit value must be greater than 100". Then it adds `_value` to `account[_address]` (the account balance of `_address`). Finally it checks if `account[_address]` is still greater or equal than `_value` after deposit, if it's not then it reverts with an error message "Deposit failed".
6. `function getBalance(address _address) public view returns (uint) { ... }` - This function allows anyone to check their account balance by specifying an address (their own address). The `public` keyword means this function can be called by anyone. The `view` keyword means this function does not change the state of the contract. It simply reads from the state variables but does not consume gas. The function returns `account[_address]` which is the balance of `_address`.


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
