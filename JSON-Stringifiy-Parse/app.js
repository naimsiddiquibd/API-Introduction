// JavaScript Object Notation
// JSON
const user = { id: 694, name: 'Naim', job: 'Engineer'}
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    name: 'Alisa Store',
    address: 'Sector 11, Banani',
    products: ['laptop', 'mobile', 'bike'],
    isExpensive: true
}
const shopStringfied = JSON.stringify(shop);
const shopUnStringified = JSON.parse(shopStringfied);
console.log(shop);
console.log(shopStringfied);
console.log(shopUnStringified);