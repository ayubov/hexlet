import { cons, car, cdr } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const make = () => l();
export const node = (tag, content) => cons(tag, content);
export const append = (tag, html) => consList(html, tag);
export const toString = (dom) => {
  if (isEmpty(dom)) {
    return "";
  }
  return `${toString(tail(dom))}<${car(head(dom))}>${cdr(head(dom))}</${car(head(dom))}>`
}

// END
