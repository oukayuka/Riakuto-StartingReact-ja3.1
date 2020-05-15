const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5));

const triple = withMultiple(3);
console.log(triple(5));
