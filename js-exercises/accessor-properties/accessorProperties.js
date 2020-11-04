function accessorProperties() {
  return {
    get number() {
      return this.binary;
    },

    set number(value) {
      this.binary = value.toString(2);
    },
  };
}

export {
  accessorProperties,
};
