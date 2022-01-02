//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

contract InstaNFT is ERC1155 {
    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/QmeG8E38dJqq4nL6dnW6JEg4c6Fn4HsqVHJMLAGPdWgUhy"
        )
    {
        console.log("This is my NFT contract. Woah!");
    }
}
