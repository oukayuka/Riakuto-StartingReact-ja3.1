const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  return sayHello;
};

const greet = greeter('Step Jun');
greet();
