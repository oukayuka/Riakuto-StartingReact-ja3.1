const str = `{"id": 1, "username": "john_doe"}`;
const user: unknown = JSON.parse(str);

console.log(user.id, user.address.zipCode);
