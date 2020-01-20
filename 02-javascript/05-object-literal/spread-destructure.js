const person = {
  id: 100,
  name: 'John Doe',
  email: 'johndoe@nutcrucker-books.com',
  age: 30,
};
const { id, ...personWithoutId } = person;
console.log(id, personWithoutId);
