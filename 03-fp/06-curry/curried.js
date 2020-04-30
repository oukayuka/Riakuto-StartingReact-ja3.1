const multiply = (n, m) => n * m;
console.log(multiply(2, 4));

const curriedMultiply = (n) => {
  return (m) => n * m;
};
console.log(curriedMultiply(2)(4));

const simpleCurriedMultiply = (n) => (m) => n * m;
console.log(simpleCurriedMultiply(2)(4));

