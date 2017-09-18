// BEGIN (write your solution here)
export const cons = (a, b) => Math.pow(2, a) * Math.pow(3, b);
export const car = (a) => {
  let n = 0;
  const c = (a) => {
if (a%2!==0) {
  return n;
  }
  n++;
  return c(a/2);
  }
return c(a);
}
export const cdr = b => {
  let n = 0;
  const c = (b) => {
if (b%3!==0) {
  return n;
  }
  n++;
  return c(b/3);
  }
return c(b);
}
// END
