interface Shape {
  readonly name: string;
  getArea: () => number;
}

interface Quadrangle {
  side: number;
}

class Rectangle implements Shape, Quadrangle {
  readonly name = 'rectangle';
  side: number;
  sideB: number;

  constructor(side: number, sideB: number) {
    this.side = side;
    this.sideB = sideB;
  }

  getArea = (): number => this.side * this.sideB;
}

const rect = new Rectangle(6, 5);
console.log(rect.getArea());
