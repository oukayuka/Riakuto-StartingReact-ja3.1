class Counter {
  constructor(initCount) {
    this.count = initCount;
  }

  increment = () => this.count++;
}

const counter = new Counter(1);
console.log(
  counter.increment(),
  counter.increment(),
  counter.increment(),
);
