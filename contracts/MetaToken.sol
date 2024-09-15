// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract MyNFT is ERC721, Ownable {
    string[] private _prompts;
    mapping(uint256 => string) private _tokenURIs;
    constructor(string[] memory prompts)
        ERC721("MyNFT", "MNFT")
        Ownable()
    {
        _prompts = prompts;
    }
    function mint(
        address to,
        uint256 tokenId,
        string memory _tokenURI
    ) public onlyOwner {
        _mint(to, tokenId);
        _setTokenDesc(tokenId, _tokenURI);
    }
    function _setTokenDesc(uint256 tokenId, string memory _tokenDesc) internal {
        _tokenURIs[tokenId] = _tokenDesc;
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        return _tokenURIs[tokenId];
    }
    function promptDescription(uint256 tokenId)
        public
        view
        returns (string memory)
    {
        return _prompts[tokenId];
    }
}
