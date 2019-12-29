const hof = (adds, fn) => {
  return n => fn(n + adds);
};

const plusOneDouble = hof(1, n => n * 2);
console.log(plusOneDouble(4));
