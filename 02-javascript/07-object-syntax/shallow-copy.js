const user1 = {
  name: 'Patty Rabbit',
  email: 'patty@maple.town',
  address: {
    town: 'Maple Town',
  },
};

const user2 = { ...user1, name: 'Rolley Cocker' };
user2.email = 'rolley@palm.town';
user2.address.town = 'Palm Town';

console.log(user1.email);
console.log(user1.address.town);
