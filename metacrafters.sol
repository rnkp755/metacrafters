// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract Metacrafters {

    // Public variables to store the details about the coin
    string public tokenName = "Metacrafters";
    string public tokenAbbrevation = "MCF";
    uint256 public totalSupply = 0;

    // Mapping of addresses to balances
    mapping(address => uint256) public balances;

    // Mint function to increase the total supply and balance of the specified address
    function mint(address _address, uint256 _value) public {
        totalSupply += _value;
        balances[_address] += _value;
    }

    // Burn function to decrease the total supply and balance of the specified address
    function burn(address _address, uint256 _value) public {
        require(balances[_address] >= _value, "Insufficient balance to burn");
        totalSupply -= _value;
        balances[_address] -= _value;
    }
}