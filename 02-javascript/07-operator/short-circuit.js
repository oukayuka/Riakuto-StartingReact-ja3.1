const hello = undefined || null || 0 || NaN || '' || 'Hello!';
const chao = ' ' && 100 && [] && {} && 'Chao!';

false && console.log('1.', hello);
true && console.log('2.', hello);
false || console.log('3.', chao);
