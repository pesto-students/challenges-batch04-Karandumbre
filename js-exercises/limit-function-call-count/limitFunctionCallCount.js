/* eslint-disable no-plusplus */
const limitFunctionCallCount = (cb, n) => (...args) => {
  if (n === 0) return null;
  // eslint-disable-next-line no-param-reassign
  n--;
  return cb(...args);
};

export { limitFunctionCallCount };
