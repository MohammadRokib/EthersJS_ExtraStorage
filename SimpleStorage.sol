// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract SimpleStorage {
    struct Person {
        string name;
        uint256 number;
    }

    uint256 number;
    Person[] public array;
    mapping (string => uint256) public list;

    function store(uint256 num) public virtual {
        number = num;
    }

    function retrieve() public view virtual returns(uint256) {
        return number;
    }

    function addPerson(string memory _name, uint256 num) public {
        array.push(Person(_name, num));
        list[_name] = num;
    }
}