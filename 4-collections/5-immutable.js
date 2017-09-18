class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  select(fn) {
    // BEGIN (write your solution here)
    const mapped = this.collection.map(fn);
      return new Enumerable(mapped);
    // END
  }

  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const compare = (a, b) => {
      const ax = fn(a);
      const bx = fn(b);
    const result = direction === 'asc' ? 1 : -1
    if (ax > bx) {
      return result;
    }
    return -result;
  }
  const sorted = this.collection.slice().sort(compare);
  return new Enumerable(sorted);
    // END
  }

  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }

  toArray() {
    return this.collection;
  }
}

export default Enumerable;
