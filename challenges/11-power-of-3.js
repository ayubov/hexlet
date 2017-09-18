// BEGIN (write your solution here)
export const isPowerOfThree = (int) => {
  if (int === 1) {
    return true;
  }
  else if (int < 3) {
    return false;
  }
  else
  int/=3;
  return isPowerOfThree(int);
}
// END
