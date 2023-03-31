// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

contract ExtraStorage is SimpleStorage {
    function store(uint256 num) public override {
        number = num+1;
    }
}