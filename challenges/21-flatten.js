// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const flatten = (list) => {

const iter = (list, acc) => {
  if (isEmpty(list)) {
  return reverse(acc);
  }

  if (!isList(head(list))) {
    return iter(tail(list), cons(head(list), acc))
  }
return iter(tail(list), reduce((element, acc2) => cons(element,acc2), acc, flatten(head(list))));

}

 return iter(list,l());
}
export default flatten;
