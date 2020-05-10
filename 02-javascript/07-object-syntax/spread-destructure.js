const person = {
  id: 1,
  name: 'John Doe',
  email: 'john-d@mymail.com',
  age: 30,
};
const { id, ...personWithoutId } = person;

console.log(id, personWithoutId);
