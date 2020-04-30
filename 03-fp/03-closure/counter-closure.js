const counterMaker = (initCount = 0) => {
  let count = initCount;
  const increment = () => count++;

  return increment;
};

const count = counterMaker(1);
console.log(
  count(),
  count(),
  count(),
);
