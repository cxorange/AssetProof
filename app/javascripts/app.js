// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import assetProof_artifacts from '../../build/contracts/AssetProof.json'

var AssetProof = contract(assetProof_artifacts);

window.submit = function(){
	console.log('-------Submit-------');
	let name = $("#asset_name").val();
	let phoneNumber = $("#asset_phoneNumber").val();
	let digitalIdentity = $("#asset_digitalIdentity").val();
	let idNumber = $("#asset_idNumber").val();

	console.log('----' + name + '----');
	console.log('----' + phoneNumber + '----');
	console.log('----' + digitalIdentity + '----');
	console.log('----' + idNumber + '----');

    AssetProof.deployed().then(function(contractInterface){
    	contractInterface._setUser(name , phoneNumber , digitalIdentity, idNumber,{gas: 470000, from:web3.eth.accounts[0]});
    });
}

window.getUser = function(){
	console.log(web3);
	AssetProof.deployed().then(function(contractInterface){
		contractInterface._getUserInformation(web3.eth.accounts[0]).then(function(values){
			
			for (var i = 0; i < values.length; i++) {
				var userInfomation = values[i]

				$("#user_information").append("<tr><td>" + userInfomation + "</tr></td>")
			}
		});
	})
}

$(document).ready(function(){
  if (typeof web3 != 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
  }else{
    window.web3 = new Web3(new Web3.provider.HttpProvider('http://localhost:8545'));
  }

  AssetProof.setProvider(web3.currentProvider);

  var accounts = web3.eth.accounts;
  console.log(accounts);
  web3.eth.getBalance(accounts[0],function(error, result){
  	console.log(result.toNumber() / (10 ** 18));
  });
  

  var event = AssetProof.deployed().then(function(contractInterface){
	contractInterface.NewUser(function(error, result){
		console.log('-----' + result["args"] + '------');
	});
  });
});