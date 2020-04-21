const hello = undefined || null || 0 || '' || 'Hello!';
const chao = 'Bonjour' && 100 && 'Chao';

false && console.log(hello, 'with false');
true && console.log(hello, 'with true');
console.log(chao);
