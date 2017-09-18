import * as strings from './strings';

// BEGIN (write your solution here) (write your solution here)
export default (integer) => {
const stringInteger = String(integer);
return Number(stringInteger[0]) + Number(stringInteger[1]) + Number(stringInteger[2]) ===
Number(stringInteger[3]) + Number(stringInteger[4]) + Number(stringInteger[5])
}
// END
