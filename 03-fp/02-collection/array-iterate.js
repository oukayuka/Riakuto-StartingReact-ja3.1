const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.map((n) => n * 2));
console.log(arr.filter((n) => n % 3 === 0));
console.log(arr.find((n) => n > 4));
console.log(arr.findIndex((n) => n > 4));
console.log(arr.every((n) => n !== 0));
console.log(arr.some((n) => n >= 10));
