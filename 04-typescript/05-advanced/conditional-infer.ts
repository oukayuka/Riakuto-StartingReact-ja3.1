type Flatten<T> = T extends Array<infer U> ? U : T;

const num = 5;
const arr = [3, 6, 9];
type A = Flatten<typeof arr>;
type N = Flatten<typeof num>;
