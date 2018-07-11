pragma solidity ^0.4.17;

contract Ownable{
    address public _owner;
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
	
	function Owable() public{
	   _owner = msg.sender;
	}

	modifier onlyOwner(){
	   require(_owner == msg.sender);
	   _;
	}

	function transferOwnership(address newOwner)public onlyOwner{
	   require(newOwner != address(0));

	   OwnershipTransferred(_owner, newOwner);
	   _owner = newOwner;
	}
}