function dropElements(elements, predicate) {
  return elements.filter(ele => predicate(ele));
}

export { dropElements };
