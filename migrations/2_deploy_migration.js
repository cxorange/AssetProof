var AssetProof = artifacts.require("./AssetProof.sol");
var Ownable = artifacts.require("./Ownable.sol");
module.exports = function(deployer) {
  deployer.deploy(AssetProof);
  deployer.deploy(Ownable);
};