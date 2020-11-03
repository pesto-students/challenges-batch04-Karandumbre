const deepCopyObject = obj => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  const clone = {};
  for (const i in obj) {
    if (obj[i] !== null && typeof (obj[i]) === 'object') {
      clone[i] = deepCopyObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
};

export { deepCopyObject };
