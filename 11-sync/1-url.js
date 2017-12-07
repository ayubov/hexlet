import url from 'url';

// BEGIN (write your solution here)
export default (uri, obj = {}) => {
  const urlObj = url.parse(uri, true);
  const query = Object.keys({ ...urlObj.query, ...obj }).reduce((acc, e) => (obj[e] === null ? acc
    : { ...acc, [e]: (obj[e] || urlObj.query[e]) }), {});
  return url.format({ ...urlObj, query, search: null });
}
// END
