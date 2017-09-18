import 'babel-polyfill';

// BEGIN (write your solution here)
const withoutFalsy = value => value !== false && value !== null && value !== 0 && value !== '' && value !== undefined;
const compact = (arr) => arr.filter(withoutFalsy);
export default compact;
// END
