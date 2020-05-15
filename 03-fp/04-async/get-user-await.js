import fetch from 'node-fetch';

const getUser = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!response.ok) {
    throw new Error(`${response.status} Error`);
  }

  return response.json();
};

console.log('-- Start --');

const main = async () => {
  try {
    const user = await getUser(2);
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('-- Completed --');
  }
};

main();
