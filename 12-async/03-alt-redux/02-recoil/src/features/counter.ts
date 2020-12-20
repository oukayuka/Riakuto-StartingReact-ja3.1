/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export const counterState = atom({
  key: 'counter',
  default: 0,
});
