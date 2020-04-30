const permissions = {
  r: 0b100 as const,
  w: 0b010 as const,
  x: 0b001 as const,
};

type PermChar = keyof typeof permissions;       // 'r' | 'w' | 'x'
type PermNumber = typeof permissions[PermChar]; // 1 | 2 | 4
