import { makePoint, getX, getY, toString } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeSegment = (a,b) => {
  return cons(a,b);
}

export const startSegment = (a) => {
  return car(a);
}

export const endSegment = (a) => {
  return cdr(a);
}

export const toStr = (a) => {
  return "[" + toString((startSegment)(a)) + ", " + toString((endSegment)(a)) + "]";
}

export const midpointSegment = (a) => {
  return makePoint (((getX(startSegment(a)) + getX(endSegment(a)))/2), ((getY(startSegment(a)) + getY(endSegment(a)))/2));
}
// END
