// BEGIN (write your solution here)
export default (params) => Object.keys(params).sort().map(k => `${k}=${params[k]}`).join('&');
// END
