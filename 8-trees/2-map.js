// BEGIN (write your solution here)
const map = (f, tree) => {
  if (!tree.children) {
    return f(tree);
  }
  return { ...f(tree), children: tree.children.map(n => map(f, n)) }
};

export default map;
// END
