import { l, isEmpty, head, tail, filter } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const def = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  return filter((n) => ((n%2 === (head(list)%2) || n%2 === -(head(list)%2))),list);

}
export default def;
// END
