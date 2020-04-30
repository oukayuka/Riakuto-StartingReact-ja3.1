console.log(typeof 100);  // 'number'

const arr = [1, 2, 3];
console.log(typeof arr);  // 'object'
type SomeType = typeof arr;

const val: SomeType = [4, 5, 6];
// const val2: SomeType = ['foo', 'bar', 'baz'];  /* compile error */
