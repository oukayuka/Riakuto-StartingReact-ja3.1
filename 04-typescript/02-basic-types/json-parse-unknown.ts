const str = `{ "id": 1, "username": "patty" }`;
const user: unknown = JSON.parse(str);

console.log(user.id, user.address.zipCode);
