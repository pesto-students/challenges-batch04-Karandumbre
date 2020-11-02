function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return (...args2) => curried.apply(this, args.concat(args2));
  };
}

// function curry(func) {
//   return function curried(...args) {
//     if (args.length === func.length) {
//       return func(...args);
//     }
//     return (...args2) => curried(...args, ...args2);
//   };
// }

export {
  curry,
};
