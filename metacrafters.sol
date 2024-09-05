// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract DegenToken is ERC20, Ownable, ERC20Burnable {
    using Strings for uint256;

    struct Item {
        string name;
        uint256 redeemAmount;
    }

    mapping(uint256 => Item) public items;
    mapping(address => mapping(uint256 => uint256)) public redeemedItems;

    constructor() ERC20("Degen", "DEG") Ownable(msg.sender) {
        items[1] = Item("Painting", 100);
        items[2] = Item("Antique Jewellwry", 120);
        items[3] = Item("Antique Knife", 200);
        items[4] = Item("Candy", 150);
        items[5] = Item("Crown", 360);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transferDGN(address _to, uint256 _amount) public returns (bool) {
        require(balanceOf(msg.sender) >= _amount, "Transfer Failed: Insufficient balance.");
        _transfer(msg.sender, _to, _amount);
        return true;
    }

    function burnDGN(uint256 _amount) public {
        require(balanceOf(msg.sender) >= _amount, "Burn Failed: Insufficient balance.");
        _burn(msg.sender, _amount);
    }

    function showShopItems() external pure returns (string memory) {
        string memory saleOptions = "The items on sale: {1} Painting (100) \n{2} Antique Jewellery (120) \n{3} Antique Knife (200) \n{4} Candy (150) \n{5} Crown (360)";
        return saleOptions;
    }

    function redeem(uint256 _item, uint256 _quantity) external {
        require(_quantity > 0, "Quantity must be greater than zero");

        Item storage selectedItem = items[_item];
        require(selectedItem.redeemAmount > 0, "Invalid item");
        require(balanceOf(msg.sender) >= selectedItem.redeemAmount * _quantity, "Redeem Failed: Insufficient balance.");

        _burn(msg.sender, selectedItem.redeemAmount * _quantity);

        redeemedItems[msg.sender][_item] += _quantity;
    }

    function getRedeemedItems(address user) external view returns (string memory) {
        string memory result = "";
        for (uint256 i = 1; i <= 5; i++) {
            if (redeemedItems[user][i] > 0) {
                string memory item = items[i].name;
                string memory quantity = Strings.toString(redeemedItems[user][i]);
                result = string(abi.encodePacked(result, item, ": ", quantity, " items\n"));
            }
        }
        return result;
    }
}