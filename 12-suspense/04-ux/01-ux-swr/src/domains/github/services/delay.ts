const delay = (time: number) => (result: Function) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });

export default delay;
