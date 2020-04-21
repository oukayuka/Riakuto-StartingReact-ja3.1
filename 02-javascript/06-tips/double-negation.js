const falsies = [undefined, null, NaN, false, 0, ''];
const truthies = [true, 1, 'a', [10, 20], { a: 123 }];

for (val of falsies) {
  console.log(!!val);
}

for (val of truthies) {
  console.log(!!val);
}
