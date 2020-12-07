const hello = undefined || null || 0 || NaN || '' || 'Hello!';
const chao = ' ' && 100 && [] && {} && 'Chao!';

true && console.log('1.', hello);
false && console.log('2.', hello);
true || console.log('3.', chao);
false || console.log('4.', chao);
