const foo: unknown = '1,2,3,4';

if (typeof foo === 'string') {
  console.log(foo.split(','));
}

// console.log(foo.split(','));  /* compile error */
