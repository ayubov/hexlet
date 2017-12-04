import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const map = (func, elements) => {
  const iter = (elements,acc) => isEmpty(elements) ? reverse(acc) : iter(tail(elements),cons(func(head(elements)),acc));
  return iter(elements,l());
};

const mirror = (html) => map(element => node(name(element), reverseStr(value(element))), html);

export {map,mirror};

// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
