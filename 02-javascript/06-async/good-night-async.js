const goodNight = () => new Promise(resolve => {
  console.log('おやすみ');
  setTimeout(resolve, 2000);
});

const main = async () => {
  try {
    await goodNight();
    console.log('おはよう！');
  } catch (err) {
    console.error('起こさないで！');
  } finally {
    console.log('よく寝た');
  }
};

main();
