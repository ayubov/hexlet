// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
  const sum1 = (n) => n === 1 ? 1 : n*n + sum1(n-1);
  const sum2 = (n) => {
    const sum11 = (n) => n === 1 ? 1 : n + sum11(n-1);
    return sum11(n)*sum11(n);
  }
  return Math.abs(sum1(n)-sum2(n))
}
// END;

export default sumSquareDifference;
 
