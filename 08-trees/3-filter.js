// BEGIN (write your solution here)
const filter = (f, tree) => {
  if (!f(tree)) {
    return null;
  }  
  return tree.children ? { ...tree, children: tree.children.map(n => filter(f, n)).filter(n => n) } : tree;
};

export default filter;
// END
