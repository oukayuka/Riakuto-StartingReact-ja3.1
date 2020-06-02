type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';

type TCurrency = {
  unit: Unit;
  amount: number;
};

interface ICurrency {
  unit: Unit;
  amount: number;
}

const priceA: TCurrency = { unit: 'JPY', amount: 1000 };
const priceB: ICurrency = { unit: 'USD', amount: 10 };
console.log(priceA);
console.log(priceB);
