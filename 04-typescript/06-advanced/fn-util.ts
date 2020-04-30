const f1 = (a: number, b: string) => { console.log(a, b); };
const f2 = () => ({ x: 'hello', y: true });

type P1 = Parameters<typeof f1>;
type P2 = Parameters<typeof f2>;
type R1 = ReturnType<typeof f1>;
type R2 = ReturnType<typeof f2>;
