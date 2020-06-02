// function declaration statement
{
  function add(n: number, m: number): number {
    return n + m;
  }
  console.log(add(2, 4));
}

// function keyword expression
{
  const add = function (n: number, m: number): number {
    return n + m;
  };
  console.log(add(5, 7));
}

// arrow function expression
{
  const add = (n: number, m: number): number => n + m;
  const hello = (): void => {
    console.log('Hello!');
  };

  console.log(add(8, 1));
  hello();
}
