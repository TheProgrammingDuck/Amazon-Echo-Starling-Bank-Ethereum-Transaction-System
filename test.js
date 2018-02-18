const Starling = require('starling-developer-sdk');
const client = new Starling({
accessToken: 'nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC',
apiUrl: 'https://api-sandbox.starlingbank.com'
});
// client.getAccount('DfjcRjuoFcEm6XqPqjipRNC3S6YDsF559880CAU6miS0w7F90L8UEs58e7PrWcyA')
// .then(({data}) =>  console.log(data))
// .catch(err => console.log(err));
client.makeLocalPayment('nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC', '8100b855-78ac-404d-a2a5-0359c972ae2a', 'hi', '5.00')
.then(({data}) =>  console.log(data))
.catch(err => console.log(err));

client.getBalance()
.then(({data}) =>  console.log(data.availableToSpend))
.catch(err => console.log(err));
