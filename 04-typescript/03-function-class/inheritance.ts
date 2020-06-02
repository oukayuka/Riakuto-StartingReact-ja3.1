class Rectangle {
  name = 'rectangle';
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = (): number => this.sideA * this.sideB;
}

class Square extends Rectangle {
  readonly name = 'square';
  side: number;

  constructor(side: number) {
    super(side, side);
    this.name = 'square';
  }
}

const sq = new Square(5);
console.log(sq.getArea());
