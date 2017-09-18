class Enumerable {
  constructor(collection,operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  select(fn) {
    return this.build(e => e.map(fn));
  }

  orderBy(fn, direction = 'asc') {
    const compareFunction = (a, b) => {
      const compareResult = direction === 'asc' ? 1 : -1;
      if (fn(a) > fn(b)) {
        return compareResult;
      } else if (fn(a) < fn(b)) {
        return -compareResult;
      }
      return 0;
    };
    return this.build(e => e.sort(compareFunction));
  }

  where(fn) {
    return this.build(e => e.filter(fn));
  }

  toArray() {
    return this.operations.reduce((acc,e) => e(acc),this.collection);
  }
}

export default Enumerable;
