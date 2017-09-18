// BEGIN (write your solution here)
const isPalindrome = (string) => {
  let b = string[strings.length(string)-1];
const compare = (string,b) => {
  if (strings.length(string) === strings.length(b)) {
  return string === b;
  }
return compare(string,b + string[strings.length(string) - 1 - strings.length(b)]);
}
return compare(string,b);
}

export default isPalindrome;
// END
