// BEGIN (write your solution here)
export default (set1,set2) => new Set(Array.from(set1).filter(item => !set2.has(item)));
// END
