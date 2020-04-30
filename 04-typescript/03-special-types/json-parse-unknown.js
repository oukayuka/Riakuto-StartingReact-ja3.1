var str = "{\"id\": 1, \"username\": \"john_doe\"}";
var user = JSON.parse(str);
console.log(user.id, user.address.zipCode);
