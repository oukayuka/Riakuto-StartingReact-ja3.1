interface BaseClock {
  currentTime: Date;
//setTime: (d: Date) => void;
  setTime(d: Date): void;
}

class Clock implements BaseClock {
  currentTime: Date;

  constructor(d?: Date) {
    this.currentTime = d ?? new Date();
  }

  setWithString = (dateStr: string): void => {
    this.currentTime = new Date(dateStr);
  };
}

const clk = new Clock();
console.log(clk.currentTime);
