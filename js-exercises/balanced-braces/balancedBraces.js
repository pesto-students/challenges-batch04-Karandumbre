function balancedBraces(args) {
  const brackets = '(){}[]';
  const stack = [];
  for (const bracket of args) {
    const bracketsIndex = brackets.indexOf(bracket);
    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex);
    }
    if (bracketsIndex % 2 === 1) {
      if (stack[stack.length - 1] === bracketsIndex - 1) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

export {
  balancedBraces,
};
