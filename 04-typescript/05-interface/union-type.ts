type AAA = {
  foo?: number;
  bar: string;
};
type BBB = { foo: number };
type CCC = { baz: string };

type AorB = AAA | BBB;
type AorC = AAA | CCC;
