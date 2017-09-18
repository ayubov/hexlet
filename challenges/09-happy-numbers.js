import * as strings from './strings';

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < strings.length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

// BEGIN (write your solution here)
export const happyNumber = (num) => {
  let c = 0;
  const iter = (num,c) => {
    if (num === 1) {
      return true;
     }
  else if (c === 10) {
    return false;
  }
  c+=1;
  return iter(sumDigits(num),c)
  }
  return iter(num,c);
}
// END
