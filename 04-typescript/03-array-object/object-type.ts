const john: { name: string, age: number } = { name: 'John', age: 25 };

interface User {
  name: string;
  age?: number;
}
const jane: User = { name: 'Jane', age: 27 };
const Jack: User = { name: 'Jack' };

type Person = User;
const rick: Person = { name: 'Rick', age: 31 };
