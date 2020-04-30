type User = { username: string; address: { zipcode: string; town: string } };

const str = `{ "username": "patty", "address": "Maple Town" }`;
const data: unknown = JSON.parse(str);
const user = data as User;

console.log(user);
console.log(user.address.town);
