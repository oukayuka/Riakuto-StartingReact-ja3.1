/* eslint-disable prefer-arrow/prefer-arrow-functions,max-classes-per-file,@typescript-eslint/interface-name-prefix, import/prefer-default-export */

type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';
type Currency = {
  unit: Unit;
  amount: number;
};
class ExchangeError extends Error {}

const rate: { [unit: string]: number } = {
  USD: 1,
  EUR: 0.9,
  JPY: 108,
  GBP: 0.8,
};

const Currency = {
  exchange: (currency: Currency, unit: Unit): Currency => {
    if (!(currency.unit in rate) || !(unit in rate)) {
      throw ExchangeError;
    }
    const amount =
      Math.round((currency.amount / rate[currency.unit]) * rate[unit] * 100) /
      100;

    return { unit, amount };
  },
};

export { Currency, ExchangeError };
