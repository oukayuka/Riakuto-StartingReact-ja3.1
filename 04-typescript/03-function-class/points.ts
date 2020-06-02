class Point {
  x: number = 0;
  y: number = 0;
}

const pointA = new Point();
const pointB: Point = { x: 2, y: 4 };

interface Point3d extends Point {
  z: number;
}

const pointC: Point3d = { x: 5, y: 5, z: 10 };

console.log(pointA);
console.log(pointB);
console.log(pointC);
