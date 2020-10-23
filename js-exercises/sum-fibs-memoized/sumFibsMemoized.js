function sumFibs(num) {
  if (num <= 0) return 0;
  if (num === 1) return 2;

  const FibnacciNums = [1, 1];

  let nextFibnacciNum = FibnacciNums[FibnacciNums.length - 1]
    + FibnacciNums[FibnacciNums.length - 2];

  while (nextFibnacciNum <= num) {
    FibnacciNums.push(nextFibnacciNum);
    nextFibnacciNum = FibnacciNums[FibnacciNums.length - 1]
      + FibnacciNums[FibnacciNums.length - 2];
  }

  const oddFibonacciNum = FibnacciNums.filter(
    (FibnacciNum) => FibnacciNum % 2 !== 0,
  );

  return oddFibonacciNum.reduce((sum, fibnacciNum) => sum + fibnacciNum, 0);
}

function cacheFunction() {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = sumFibs(...args);
    cache.set(key, result);
    return result;
  };
}

export { sumFibs, cacheFunction };
