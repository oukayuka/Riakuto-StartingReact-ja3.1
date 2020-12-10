type Company = 'Apple' | 'IBM' | 'GitHub';

type C1 = Lowercase<Company>;
type C2 = Uppercase<Company>;
type C3 = Uncapitalize<Company>;
type C4 = Capitalize<C3>;
