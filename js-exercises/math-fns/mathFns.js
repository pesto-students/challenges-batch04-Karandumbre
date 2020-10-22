/* eslint-disable no-param-reassign */
// You can use the function from the `Math` module.
const sqrt = (num) => num ** 0.5;

const power = (num, pow) => num ** pow;

const round = (num) => {
  const isNegative = num < 0;
  if (isNegative) {
    num *= -1;
  }
  const value = parseInt(num + 0.5, 10);
  return isNegative ? -value : value;
};

// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
