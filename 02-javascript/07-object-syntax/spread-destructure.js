const person = {
  id: 1,
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  age: 8,
};
const { id, ...personWithoutId } = person;

console.log(id, personWithoutId);
