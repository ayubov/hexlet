// BEGIN (write your solution here)
export default (list, fn) => list.reduce((acc, e) => ({ ...acc, [fn(e)]: e }), {});
// END
