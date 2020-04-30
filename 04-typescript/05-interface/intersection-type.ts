type AAA = { foo: number };
type BBB = { bar: string };
type CCC = {
  foo?: number;
  baz: boolean;
};

type AnB = AAA & BBB;
type AnC = AAA & CCC;
type CnAnB = CCC & (AAA | BBB);
