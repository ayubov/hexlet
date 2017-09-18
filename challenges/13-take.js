import { l, isEmpty, head, tail, cons } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const take = (n, list) => {
    if (n === 0 || isEmpty(list)) {
      return l();
    }
 return cons(head(list), take(n-1, tail(list)))
}
export default take;
// END
