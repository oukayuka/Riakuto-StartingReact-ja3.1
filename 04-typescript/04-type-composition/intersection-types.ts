type A = { foo: number };
type B = { bar: string };
type C = {
  foo?: number;
  baz: boolean;
};

type AnB = A & B;
type AnC = A & C;
type CnAorB = C & (A | B);
