console.log('a' in { a: 1, b: 2, c: 3 });   // true

type Figure = 'one' | 'two' | 'three';
type FigureMap = { [k in Figure]?: number };

const figures: FigureMap = {
  one: 1,
  three: 3,
};
// figures.zwei = 2;  /* compile error */
