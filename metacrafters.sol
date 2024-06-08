// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyBiddingPlatform {

    address public admin;

    struct Product {
        string name;
        uint id;
        uint currentPrice;
    }

    Product[] public products;
    
    constructor(address _admin){
        admin = _admin;
    }

    function addProduct(string memory _name, uint _id, uint _currentPrice) public {
        require(msg.sender == admin, "Unauthorized access !!");
        uint currentNoOfProducts = products.length;
        Product memory newProduct = Product({
            name: _name,
            id: _id,
            currentPrice: _currentPrice
        });

        products.push(newProduct);
        assert(products.length == currentNoOfProducts + 1);
    }

    function bid(uint _id, uint _amount) public {
        bool productFound = false;
        uint i;
        for(i = 0; i < products.length; i++){
            if(products[i].id == _id){
                productFound = true;
                require(_amount > products[i].currentPrice, "Can only bid higher amount");
                products[i].currentPrice = _amount;
                break;
            }
        }
        if(!productFound){
            revert("Product with specified id is not found.");
        }
        else {
            assert(products[i].currentPrice == _amount);
        }
    }
}