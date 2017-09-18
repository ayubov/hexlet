class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn,direction = 'asc') {
    const compareFunction = (a, b) => {
      const compareResult = direction === 'asc' ? 1 : -1;
      if (fn(a) > fn(b)) {
        return compareResult;
      } else if (fn(a) < fn(b)) {
        return -compareResult;
      }
      return 0;
    };
    this.collection = this.collection.sort(compareFunction);
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
