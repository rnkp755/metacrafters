// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyBiddingPlatform {

    address public admin;

    struct Product {
        string name;
        string url;
        uint currentPrice;
    }

    Product[] public products;
    
    constructor(address _admin){
        admin = _admin;
    }

    function addProduct(string memory _name, string memory _url, uint _currentPrice) public {
        require(msg.sender == admin, "Unauthorized access !!");
        uint currentNoOfProducts = products.length;
        Product memory newProduct = Product({
            name: _name,
            url: _url,
            currentPrice: _currentPrice
        });

        products.push(newProduct);
        assert(products.length == currentNoOfProducts + 1);
    }

    function bid(uint index, uint _amount) public {
        if(index >= products.length){
            revert("Product with specified id is not found.");
        }
        else {
            require(_amount > products[index].currentPrice, "Can only bid higher amount");
            products[index].currentPrice = _amount;
            assert(products[index].currentPrice == _amount);
        }
    }

    function getProduct(uint index) public view returns (Product memory) {        
        return products[index];     
    }

    function getAllProducts() public view returns (Product[] memory) {
        return products;
    }
}