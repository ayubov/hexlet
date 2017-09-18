import { makePoint, getX, getY } from 'hexlet-points';

// BEGIN (write your solution here)
export const quadrant = (a) => {
  if (getX(a) === 0 || getY(a) === 0) {
    return null;
  }
  else if (getX(a) > 0 && getY(a) > 0) {
    return 1;
  }
  else if (getX(a) > 0 && getY(a) < 0) {
    return 4;
  }
  else if (getX(a) < 0 && getY(a) < 0) {
    return 3;
  }
  return 2;
}

export const symmetricalPoint = (point) => {
  return makePoint(-getX(point), -getY(point))
}

export const distance = (a,b) => {
  return Math.sqrt((getX(b) - getX(a)) * (getX(b) - getX(a)) + (getY(b) - getY(a)) * (getY(b) - getY(a)));
}
// END
