import type { Resident } from './resident';

// const resident = new Resident();  /* compile error */
const patty: Resident = {
  name: 'Patty Rabbit',
  age: 8,
  species: 'rabbit',
};

console.log(patty);
