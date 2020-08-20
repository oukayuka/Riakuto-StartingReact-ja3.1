/* eslint-disable @typescript-eslint/no-explicit-any */
const delay = (time: number) => (result: () => any): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });

export default delay;
