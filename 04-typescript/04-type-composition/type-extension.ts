type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';
interface Currency {
  unit: Unit;
  amount: number;
}

interface IPayment extends Currency {
  date: Date;
}

type TPayment = Currency & {
  date: Date;
};

const date = new Date('2020-09-01T12:00+0900');
const payA: IPayment = { unit: 'JPY', amount: 10000, date };
const payB: TPayment = { unit: 'USD', amount: 100, date };

console.log(payA);
console.log(payB);
