// BEGIN (write your solution here)
Function.prototype.wrap = function wrap(func) {
  return (name1, name2) => func(this, name1, name2);
};
// END
