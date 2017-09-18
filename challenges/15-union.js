import { l, isEmpty, cons, reduce, has, reverse } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const union = (list1,list2) => {
  if (isEmpty(list1) && isEmpty(list2)) {
  return l();
  }
const reduce1 = reduce((n, acc) => {
  return !has(acc, n) ? cons(n, acc) : acc;}, l(), list1);
return reverse(reduce((n, acc) => {
  return !has(acc, n) ? cons(n, acc) : acc;}, reduce1, list2));
}
export default union;
// END
