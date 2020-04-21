const rnd = Math.floor(Math.random() * 10 + 1);
const review = rnd >= 5 ? 'enough!' : 'too small...';

console.log(rnd, review);
