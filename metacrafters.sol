// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {

    // Mapping variable to store account
    mapping(address => uint) public account;

    // Deposit Function
    function deposit(address _address, uint _value) public {
        require(_value > 100, "Deposit value must be greater than 100");

        account[_address] += _value;

        assert(account[_address] >= _value);
        if (account[_address] < _value) {
            revert("Deposit failed");
        }
    }

    // Fetch the account balance
    function getBalance(address _address) public view returns (uint) {
        return account[_address];
    }

}