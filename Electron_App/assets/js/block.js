    
  var web3Host    = 'http://localhost';
  var web3Port    = '8545';

  /* web3 initialization */ //NOT SURE IF THIS WILL WORK may need to edit
  var Web3 = require('web3');
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider(web3Host + ':' + web3Port));
  if (!web3.isConnected()) {
      console.error("Ethereum - no connection to RPC server");
  } else {
      console.log("Ethereum - connected to RPC server");
  }
  
  var account = web3.eth.accounts[0];



  var sendDataObject = {
      gas: 300000,
      from: account
  };

  window.account = account;

  window.sendDataObject = sendDataObject;
  window.web3 = web3;

  function getBalance() {
    window.web3.eth.getBalance(window.account, function (err, balance){
        alert(parseFloat(window.web3.fromWei(balance, "ether")));
    });
  }

  function getBalanceExchange() {
    window.web3.eth.getBalance(window.web3.eth.accounts[5], function (err, balance){
        alert(parseFloat(window.web3.fromWei(balance, "ether")));
    });
  }

