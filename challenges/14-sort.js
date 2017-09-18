import { l, isEmpty, head, tail, cons, append, filter } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (array) => {
  if(isEmpty(array)) {
    return l();
  }
  if (filter((element) => element < head(array), array) === l()) {
    return array;
  }
  const less = filter(element=> element<head(array),array);
  const equal = filter(element=> element===head(array),array);
  const more = filter(element=> element>head(array), array);
  return append(sort(less), append(equal, sort(more)));
};
export default sort;
// END
