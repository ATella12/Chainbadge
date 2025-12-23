// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ERC721 } from '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import { Ownable } from '@openzeppelin/contracts/access/Ownable.sol';

contract ChainCheckBadge is ERC721, Ownable {
    uint256 public nextTokenId = 1;
    uint256 public immutable maxSupply;
    mapping(address => bool) public hasMinted;

    constructor(uint256 maxSupply_) ERC721('ChainCheck Badge', 'CCBADGE') Ownable(msg.sender) {
        maxSupply = maxSupply_;
    }

    function mint() external returns (uint256) {
        require(!hasMinted[msg.sender], 'Already minted');
        require(nextTokenId <= maxSupply, 'Sold out');

        uint256 tokenId = nextTokenId;
        nextTokenId += 1;
        hasMinted[msg.sender] = true;
        _safeMint(msg.sender, tokenId);
        return tokenId;
    }
}
