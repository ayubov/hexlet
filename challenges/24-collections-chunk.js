import 'babel-polyfill';

// BEGIN (write your solution here)
const chunk = (arr, num) => {
  const iter = (arr, num, accum) => {
    arr.reduce((acc, currentValue) => {
      if (acc.length === num)  {
        accum = accum.concat([acc]);
        acc = [].concat(currentValue);
        if (currentValue === arr[arr.length - 1]) {
          accum = accum.concat([acc]);
          return acc;
      }
      return acc;
      }
      if (currentValue === arr[arr.length - 1]) {
        acc = acc.concat(currentValue);
        accum = accum.concat([acc]);
      }
      return acc.concat(currentValue);
    }, []);
    return accum;
  };
  return iter(arr,num,[]);
};

export default chunk;
// END
