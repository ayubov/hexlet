// BEGIN (write your solution here)
export const Zero = (f) => {
  return function (x) {
    return x;
  };
};

export const Succ = (n) => {
  return function (f) {
    return function (x) {
      return f(n(f)(x));
    };
  };
};
// END
