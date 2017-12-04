class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...args) {
    const func = args.map(arg => {
      if (typeof arg === 'function') {
        return coll => coll.filter(arg);
      }
      const keys = Object.keys(arg);
      return coll => coll.filter(element =>
        keys.every(key => arg[key] === element[key]));
    });
   return this.build(func);
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
