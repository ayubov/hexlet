// BEGIN (write your solution here)
const search = (doc, e) => [...doc.children].reduce((acc, v) => {
  if (v.tagName.toLowerCase() === e) {
    if (!v.children.length) {
      return [...acc, v];
    }
    return [...acc, v, ...search(v, e)];
  }
  if (v.children.length) {
    return [...acc, ...search(v, e)];
  }
  return acc;
}, []);
export default search;
// END

