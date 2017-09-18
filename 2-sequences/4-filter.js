import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
const filter = (func,html) => {
  const iter = (html,acc) => {
    if (isEmpty(html)) {
      return reverse(acc);
    }
    return func(head(html)) ? iter(tail(html), cons(head(html),acc)) : iter(tail(html),acc);
  };
  return iter(html,l());
};

const quotes = (html) => map(element => value(element), filter(element => is('blockquote', element), html));

export {filter,quotes};
// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
