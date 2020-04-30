interface BaseClock {
  currentTime: Date;
  setTime: (d: Date) => void;
}

class Clock implements BaseClock {
  currentTime: Date;

  constructor(d?: Date) {
    this.currentTime = d || new Date();
  }

  setTime = (d: Date): void => {
    this.currentTime = d;
  };
}
