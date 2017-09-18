import * as strings from './strings';

// BEGIN (write your solution here)
export const reverseInt = (int) => {
const reverse = (int) => {
  let newInt = "";
  for (let i = 0; i < strings.length(String(int)); i++) {
  newInt+=String(int)[strings.length(String(int))-1-i];
  }
  return Number(newInt);
};
if (int > 0) {
  return reverse(int);
}
return -reverse(int-int*2);
};
// END
