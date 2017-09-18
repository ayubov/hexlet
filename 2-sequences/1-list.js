// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const has = (list, value) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === value) {
    return true;
  }
  return has(tail(list), value);
};

export const reverse = (list) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }
    return iter(tail(list),cons(head(list),acc));
  };
  return iter(list,l());
};

export const concat = (list1,list2) => {
  const concatReverse = (list1,list2) => {
  if (isEmpty(list1)) {
    return list2;
  }
  return concatReverse(tail(list1), cons(head(list1), list2));
};
 return concatReverse(reverse(list1),list2);
};

// END
