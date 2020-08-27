const user = {
  id: 1,
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  age: 8,
};
const { id, ...userWithoutId } = user;

console.log(id, userWithoutId);
