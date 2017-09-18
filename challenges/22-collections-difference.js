import 'babel-polyfill';

// BEGIN (write your solution here)
const difference = (arr1,arr2) => arr1.reduce((acc, currentValue) => (arr2.includes(currentValue) ? acc: acc.concat(currentValue)), []);
export default difference;
// END
