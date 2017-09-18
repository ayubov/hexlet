export const cons = (x, y) => (m) => m(x, y);

// BEGIN (write your solution here)
export const car = (pair) => {
  const a = (x,y) =>  {
    return x;
  }
return pair(a);
}

export const cdr = (pair) => {
  const a = (x,y) =>  {
    return y;
  }
return pair(a);
}
// END
