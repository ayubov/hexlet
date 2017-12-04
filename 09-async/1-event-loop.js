import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)
  const [more, less, directOrder] = lines1.length > lines2.length ?
    [lines1, lines2, true] : [lines2, lines1, false];
  return more.reduce((acc, e, ind) => {
    if (ind >= less.length) {
      return [...acc, directOrder ? [e, null]: [null, e]];
    }
    if (less[ind] === e) {
      return acc;
    }
    return [...acc, directOrder ? [e, less[ind]] : [less[ind], e]];
  }, []);
  // END
};

// BEGIN (write your solution here)
export default (path1, path2, cb) => {
  fs.readFile(path1, (err1, data1) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.readFile(path2, (err2, data2) => {
      if (err2) {
        cb(err2);
        return;
      }
      cb(null, compare(data1.toString(), data2.toString()));
    })
  })
}
// END
