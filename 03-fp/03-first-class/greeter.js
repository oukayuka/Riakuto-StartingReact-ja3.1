const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  return sayHello;
};

const greet = greeter('Jun');
greet();
