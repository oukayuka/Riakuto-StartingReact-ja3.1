const response = {
  data: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john-d@mymail.com',
    },
    {
      id: 2,
      name: 'Jane Roe',
      email: 'janeroe@supermail.com',
    },
    {
      id: 3,
      name: 'Joe Bloggs',
      email: 'joe-blg@coolmail.com',
    },
  ],
};

const { data: users = [] } = response;
console.log(users);
