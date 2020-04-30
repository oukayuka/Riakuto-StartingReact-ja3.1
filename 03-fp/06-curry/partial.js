const multiply = (n) => (m) => n * m;
console.log(multiply(3)(5));

const triple = multiply(3);
console.log(triple(5));
