const toArray = <T>(arg1: T, arg2: T): T[] => [arg1, arg2];
const toArrayVariably = <T>(...args: T[]): T[] => [...args];

console.log(toArray(8, 3));
console.log(toArray('foo', 'bar'));
console.log(toArrayVariably(1, 2, 3, 4, 5));
