class Counter {
  constructor(initialCount) {
    this.count = initialCount;
  }

  increment() {
    return this.count++;
  }
}

const counter = new Counter(1);
console.log(counter.increment(), counter.increment(), counter.increment()); 
