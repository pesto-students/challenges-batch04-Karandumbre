function diffArray(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }
  const missingElements = [];
  const obj = new Map();

  arr1.forEach(element => {
    if (arr2.indexOf(element) === -1) {
      obj.set(element, false);
    } else {
      obj.set(element, true);
    }
  });

  arr2.forEach(element => {
    if (!obj.get(element) && obj.get(element) !== false) {
      obj.set(element, false);
    }
  });
  for (const [key, value] of obj) {
    if (value === false) { missingElements.push(key); }
  }

  return missingElements;
}

export {
  diffArray,
};
