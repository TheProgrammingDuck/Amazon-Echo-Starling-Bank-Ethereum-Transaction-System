const Starling = require('starling-developer-sdk');
const client = new Starling({
accessToken: 'nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC',
apiUrl: 'https://api-sandbox.starlingbank.com'
});
// client.getAccount()
// .then(({data}) =>  console.log(data))
// .catch(err => console.log(err));


client.makeLocalPayment('nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC', '9b0e4685-52e0-4f0b-ae3d-d4350ba420d7', 'hi', '5.00')
.then(({data}) =>  console.log(data))
.catch(err => console.log(err));


// client.createContact('nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC', 'test_contact', 'domestic', '80325964', '608371')
// .then(({data}) =>  console.log(data))
// .catch(err => console.log(err));


// client.getContactAccount('nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC', '7ea2f753-455e-4d74-9ce7-7400949259db')
// .then(({data}) =>  console.log(data))
// .catch(err => console.log(err));
// client.getContacts('nTnCpXU98EGSgwTGiT2STq6Ns7GWh9hFlyuf7ePPrVlCiGNqxuPXhwJh0yZzpkXC')
// .then(({data}) =>  console.log(data._embedded.contacts))
// .catch(err => console.log(err));



// client.getBalance()
//  .then(({data}) =>  console.log(data.availableToSpend))
//  .catch(err => console.log(err));
