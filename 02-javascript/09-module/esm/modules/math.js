import { ONE, TWO as ZWEI } from './constants.js';

export const plus = (n, m = ONE) => n + m;
const times = (n, m = ZWEI) => n * m;

export default times;
