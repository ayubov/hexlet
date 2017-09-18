import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);
export const numer = (a) => car(a);
export const denom = (a) => cdr(a);
export const toString = (a) => `${numer(a)} / ${denom(a)}`;
export const isEqual = (a,b) => numer(a) * denom(b) === numer(b) * denom(a);
export const add = (a,b) => make(numer(a) * denom(b) + numer(b) * denom(a), denom(a) * denom(b));
export const sub = (a,b) => make(numer(a) * denom(b) - numer(b) * denom(a), denom(a) * denom(b));
export const mul = (a,b) => make(numer(a) * numer(b),denom(a) * denom(b));
export const div = (a,b) => make(numer(a) * denom(b),denom(a) * numer(b));
// END
