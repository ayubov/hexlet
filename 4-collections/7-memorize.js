class Enumerable {
// BEGIN (write your solution here)
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  select(fn) {
    const newOps = this.operations.slice();
    newOps.push(col => col.map(fn));
    return new Enumerable(this.collection, newOps);
  }

  where(fn) {
    const newOps = this.operations.slice();
    newOps.push(col => col.filter(fn));
    return new Enumerable(this.collection, newOps);
  }

  orderBy(fn, direction = 'asc') {
    const compare = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);

      const order = (direction === 'asc') ? 1 : -1;

      if (a1 > b1) {
        return order;
      } else if (a1 < b1) {
        return -order;
      } else {
        return 0;
      }
    };
    const newOps = this.operations.slice();
    newOps.push(col => col.sort(compare));
    return new Enumerable(this.collection, newOps);
  }

  toArray() {
    const newArr = this.operations.reduce((acc, op) => op(acc), this.collection.slice());
    return newArr;
  }
  // END

}

export default Enumerable;
