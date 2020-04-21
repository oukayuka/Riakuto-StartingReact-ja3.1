const users = [
  {
    name: 'Patty Rabbit',
    address: {
      town: 'Maple Town',
    },
  },
  {
    name: 'Rolley Cocker',
    address: {},
  },
  null,
];
  
for (u of users) {
  const user = u ?? { name: '(Somebody)' };
  const town = user?.address?.town ?? '(Somewhere)';
  console.log(`${user.name} lives in ${town}`);
}
