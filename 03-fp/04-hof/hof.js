const withSurplus = (fn, surplus) => {
  return (n) => fn(n + surplus);
};

const plusOneAndDouble = withSurplus((n) => n * 2, 1);
console.log(plusOneAndDouble(4));
