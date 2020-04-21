const showNames = (a, b, ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

showNames('John', 'Jane', 'Johnny', 'Jenny', 'Julia');
