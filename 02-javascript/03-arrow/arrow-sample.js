// 従来の関数宣言
function plusOne(n) {
  return n + 1;
}

// アロー関数の宣言その1
const plusOneArrow1 = (n) => { return n + 1; };

// アロー関数の宣言その2
const plusOneArrow2 = n => n + 1;

console.log(plusOne(1));
console.log(plusOneArrow1(1));
console.log(plusOneArrow2(1));
