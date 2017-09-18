import * as strings from './strings';

// BEGIN (write your solution here) (write your solution here)
const reverseString = (string) => {
  let newString = "";
  const iter = (string, newString) => {
    if (strings.length(string) === strings.length(newString)) {
      return newString;
    }
    return iter(string, newString + string[strings.length(string) - 1 - strings.length(newString)]);
  }
  return iter(string, newString);
}
export default reverseString;
  // END
