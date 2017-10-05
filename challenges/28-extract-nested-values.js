// BEGIN (write your solution here)
Object.prototype.hash = function hash(path) {
  return path.split('.').reduce((acc, item) => (acc ? acc[item] : undefined), this);
};
// END

