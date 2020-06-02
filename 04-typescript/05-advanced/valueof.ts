const permissions = {
  r: 0b100,
  w: 0b010,
  x: 0b001,
} as const;

type ValueOf<T> = T[keyof T];
type PermsNum = ValueOf<typeof permissions>;  // 1 | 2 | 4
