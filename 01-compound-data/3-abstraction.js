import { makePoint, getX, getY, quadrant } from 'hexlet-points';
import { cons, car, cdr, toString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const square = (rectangle) => {
  return car(cdr(rectangle)) * cdr(cdr(rectangle));
}

export const perimeter = (rectangle) => {
  return 2 * (car(cdr(rectangle)) + cdr(cdr(rectangle)));
}

export const containsTheOrigin = (rectangle) => {
  const point1 = car(rectangle);
  const point2 = makePoint(getX(point1) + car(cdr(rectangle)), getY(point1) - cdr(cdr(rectangle)));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END
