pragma solidity ^0.4.17;

contract AssetProof{
    event NewUser(string _name, string _phoneNumber, string _digitalIdentity,string _idNumber);
	struct User{
	   string name;
	   string phoneNumber;
	   string digitalIdentity;
	   string idNumber;
	}

	struct Station{
	   string location;
	   string approvalNumber;
	}
	
	mapping(address=>User) public assetOwner;
    mapping(address=>Station) public planAsset;
    
    function _setUser(string _name, string _phoneNumber, string _digitalIdentity,string _idNumber)public {
       User memory _user = User(_name, _phoneNumber,_digitalIdentity,_idNumber);

       assetOwner[msg.sender] = _user;

       NewUser(_name, _phoneNumber,_digitalIdentity,_idNumber);
    }

	function _getUserInformation(address _userAddress) public view returns(string name,string phoneNumber,string digitalIdentity,string idNumber){
	   
	   User memory aUser = assetOwner[_userAddress];

	   require(aUser != Null);

	   return (aUser.name,aUser.phoneNumber, aUser.digitalIdentity, aUser.idNumber);
	}
}