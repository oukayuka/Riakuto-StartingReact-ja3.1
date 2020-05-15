// Procedural programming
{
  const octuples = [];

  for (let n = 1; n <= 100; n += 1) {
    if (n % 8 === 0) {
      octuples.push(n);
    }
  }

  console.log(octuples);
}

// Functional programming
{
  const range = (start, end) =>
    [...new Array(end - start).keys()].map((n) => n + start);
  const octuples = range(1, 100).filter((n) => n % 8 === 0);

  console.log(octuples);
}
