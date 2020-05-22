import times, { plus } from './modules/math.js';
import _ from 'lodash';

console.log(plus(5));
console.log(times(4));

const arr = [7, 37, 48, 10, 5, 23];
console.log(_.min(arr), _.max(arr));
