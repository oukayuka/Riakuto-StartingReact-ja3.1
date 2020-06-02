type Permission = 'r' | 'w' | 'x';

type RW1 = Extract<Permission, 'r' | 'w'>;
type RW2 = Exclude<Permission, 'x'>;
