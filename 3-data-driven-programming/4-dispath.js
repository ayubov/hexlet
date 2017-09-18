// card.js
import { getMethod } from './generic'; // eslint-disable-line
import { contents } from './type'; // eslint-disable-line

export const getName = self =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
export const damage = (self, health) => getMethod(self, 'damage')(contents(self), health);
// END


// generic.js
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, cons as consList, isEmpty, head, tail } from 'hexlet-pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from './type'; // eslint-disable-line

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
 const searchMethod = (method, tailMethods) => {
    if (typeTag(method) == typeTag(obj) && car(contents(method)) == methodName) {
      return cdr(contents(method));
    }
    return searchMethod(head(tailMethods), tail(tailMethods))
  }
  return searchMethod(head(methods), tail(methods));
  // END
};

export const definer = type =>
  (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
  };


// simpleCard.js
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
const defmethod = definer('SimpleCard');

const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self, health) => (cdr(self)));
// END
