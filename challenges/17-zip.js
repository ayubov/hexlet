import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const zip = (list1, list2) => {
  const iter = (list1,list2,acc) => {
  if (isEmpty(list1) || isEmpty(list2)) {
    return reverse(acc);
  }
  return iter(tail(list1), tail(list2), cons(l(head(list1), head(list2)), acc));
};
return iter(list1,list2,l());
};
// END
