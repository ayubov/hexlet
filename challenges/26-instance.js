// BEGIN (write your solution here)
export const l = (...items) => [...items];
export const toString = (arr) => `(${arr.join(', ')})`;
export const head = (arr) => arr[0];
export const tail = (arr) => arr.slice(1);
export const empty = (arr) => !arr.length;
export const append = (arr,element) => arr.concat(element);
export const filter = (func,arr) => arr.filter(func);
export const map = (func,arr) => arr.map(func);
export const reduce = (func,acc,arr) => arr.reduce(func,acc);
// END
