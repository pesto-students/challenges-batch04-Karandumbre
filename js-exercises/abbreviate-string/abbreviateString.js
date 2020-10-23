function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw new Error();
  }
  const strArray = str.split(' ');
  return `${strArray[0]} ${(strArray[strArray.length - 1][0]).toUpperCase()}.`;
}

export { abbreviateString };
