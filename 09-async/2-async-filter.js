// BEGIN (write your solution here)
export default (coll, fn, cb) => {
    if (coll.length === 0) {
      cb([]);
      return;
    }    
    const iter = ([head,...rest], acc) => {
      const newAcc = fn(head) ? [...acc, head] : acc;
      if (rest.length === 0) {
        cb(newAcc);
        return;
      }
      setTimeout(iter, 0, rest, newAcc);
    };
    iter(coll,[]);
  };
  // END
  