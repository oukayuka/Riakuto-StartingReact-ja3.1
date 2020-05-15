const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: { town: 'Maple Town' },
};

const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Rolley Cocker';
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';

console.log(patty);
