const obj1 = {
  num: 444,
  fn: function() {
    console.log(this.num);
  }
};

const obj2 = {
  num: 888,
  fn: () => {
    console.log(this.num);
  }
};

obj1.fn();
obj2.fn();

