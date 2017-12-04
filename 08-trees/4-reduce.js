// BEGIN (write your solution here)
const reduce = (f, tree, acc) => {
const newAcc = f(acc, tree);
  return tree.children ? tree.children.reduce((a, e) => reduce(f, e, a), newAcc) : newAcc;
};

export default reduce;
// END
