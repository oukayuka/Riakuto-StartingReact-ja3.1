import { Currency } from './currency-export';

const dollars: Currency = {
  unit: 'USD',
  amount: 100,
};

console.log(dollars);
console.log(Currency.exchange(dollars, 'JPY'));
