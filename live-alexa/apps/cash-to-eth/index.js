var alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

// Define the alexa-app
var app = new alexa.app('Cash-To-Ethereum-through-Starling-Bank-API');
app.id = require('./package.json').alexa.applicationId;

app.launch(function(req, res) {
  //res.session('number', number);
  //res.session('guesses', 0);
  var prompt = "Hi, I'm the Starling Bank to Ethereum interface voice assistant. ";
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('GetEth', {
    "slots": { "AMOUNT": "NUMBER" },
    "utterances": ["{Purchase| Buy | Give me | I want} {AMOUNT} {Ethereum | Eth | Ether | Cabbage} "]
  },
  function(req, res) {
    console.log("TROLOLOLOL");
    var ethAmount = (+req.slot('AMOUNT'));

    if (!ethAmount){
      res.say("I'm not sure I heard how much ethereum you want to buy, could you please repeat that?");
    } 
    else if (ethAmount > 0) {
      var cashToWithdraw = ethAmount * 681;
      res.say("That's " + ethAmount + " ethereum");
      res.say("The current exchange rate is 681 pounds to 1 ethereum");
      res.say("I will now withdraw " + cashToWithdraw + " pounds.");



    }

    res.shouldEndSession(false);
  }
);

app.intent('EtherInfo', {
    "utterances": ["{How much ether do I have|} "]
  },
  function(req, res) {
    console.log("TROLOLOLOL");

    res.say();

    res.shouldEndSession(false);
  }
);

app.intent('SendEther', {
    "slots": { "AMOUNT": "NUMBER" , "ACCOUNT":"CABBAGES"},
    "utterances": ["{Send| Give} {AMOUNT} {Ethereum | Eth | Ether | Cabbage} {to |} {ACCOUNT} "]
  },
  function(req, res) {
    console.log("TROLOLOLOL");
    var ethAmount = (+req.slot('AMOUNT'));
    var account = (+req.slot('ACCOUNT'));

    if (!ethAmount){
      res.say("I'm not sure I heard how much ethereum you want to send, could you please repeat that?");
    } 
    else if (ethAmount > 0) {
      if (!account){
        res.say("I'm not sure I heard who you wanted to send that ether to, could you repeat that please?");
      }
      else {

        //First check how much ether the person has. If he/she has enough then send requested amount to requested account.
        //Else purchase the requested amount and send it.

        //If cba then just purchase requested amount and send it.
        var cashToWithdraw = ethAmount * 681;
        res.say("That's " + ethAmount + " ethereum");
        res.say("The current exchange rate is 681 pounds to 1 ethereum");
        res.say("I will now withdraw " + cashToWithdraw + " pounds to purchase " + ethAmount + " ethereum. I will then send the ethereum to " + account + " .");

      }

    }

    res.shouldEndSession(false);
  }
);



module.exports = app;