type A = {
  foo: number;
  bar?: string;
};
type B = { foo: string };
type C = { bar: string };
type D = { baz: boolean };

type AorB = A | B;
type AorC = A | C;
type AorD = A | D;
