class Person {
  constructor(name) {  
    this.name = name;
  }

  greet1() {
    const doIt = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
    const bindedDoIt = doIt.bind(this);
    bindedDoIt();
  }

  greet2() {
    const doIt = function () {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt.call(this);
  }

  greet3() {
    const _this = this;
    const doIt = function () {
      console.log(`Hi, I'm ${_this.name}`);
    };
    doIt();
  }

  greet4() {
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt();
  }

  greet5 = () => {
    const doIt = () => {
      console.log(`Hi, I'm ${this.name}`);
    };
    doIt();
  }
}

const creamy = new Person('Mami');
creamy.greet1();
creamy.greet2();
creamy.greet3();
creamy.greet4();
creamy.greet5();
