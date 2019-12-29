const counterMaker = (initialCount = 0) => {
  let count = initialCount;
  const increment = () => count++;

  return increment;
};

const count = counterMaker(1);
console.log(count(), count(), count());

