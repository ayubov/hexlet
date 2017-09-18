// BEGIN (write your solution here)
export default (arr) => arr.reduce((acc,item,index) => index === arr.indexOf(item) ? [...acc,item] : acc,[]);
// END
