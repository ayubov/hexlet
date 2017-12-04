// teachers
// BEGIN
const noop = () => {};

export default (times, fn, callback = noop) => {
  const retryAttempt = (attempts) => {
    const cb = (err, result) => {
      if (!err || attempts === 0) {
        callback(err, result);
        return;
      }
      retryAttempt(attempts - 1);
    };

    fn(cb);
  };

  retryAttempt(times === 0 ? 4 : times - 1);
};
// END