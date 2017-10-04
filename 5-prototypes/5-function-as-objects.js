// BEGIN (write your solution here)
const magic = (...numbers) => {
  const sum = numbers.reduce((acc, number) => number + acc, 0);
  const inner = (...args) => {
    const summator = Number(inner);
    inner.valueOf = () => args.reduce((acc, number) => number + acc, summator);
    return inner;
  };
  inner.valueOf = () => sum;
  return inner;
};
export default magic;
// END

