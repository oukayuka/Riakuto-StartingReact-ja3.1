const goodNight = () => {
  console.log('おやすみ');
  setTimeout(() => undefined, 2000);
};

const main = () => {
  goodNight();
  console.log('おはよう！');
};

main();
