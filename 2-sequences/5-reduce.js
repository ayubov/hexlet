import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
export const reduce = (func, acc, html) => {
  if (isEmpty(html)) {
    return acc;
  }
  return reduce(func,func(head(html),acc),tail(html));
};

export const emptyTagsCount = (tag,html) => reduce((element, acc) => is(tag,element) && value(element) === '' ? acc + 1 : acc, 0, html);
// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
