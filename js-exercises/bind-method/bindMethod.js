// You can change the `args`
// const bind = (...args) => args[0].bind(args[1]);

const bind = (fn, obj) => (...args) => fn.apply(obj, args);

module.exports = { bind };
