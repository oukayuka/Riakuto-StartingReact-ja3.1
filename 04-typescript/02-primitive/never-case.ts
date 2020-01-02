const greet = (friend: 'serval' | 'caracal' | 'cheetah') => {
  switch (friend) {
    case 'serval':
      return 'Hello, Serval!';
    case 'caracal':
      return 'Hello, Caracal!';
    case 'cheetah':
      return 'Hello, Cheetah!';
    default: {
      const check: never = friend;
    }
  }
};

console.log(greet('serval'));
