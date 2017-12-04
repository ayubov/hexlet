import { reduce } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

// BEGIN (write your solution here)
const calculateSizes = tree => reduce((acc, n) => !n.meta.size ? acc : acc + n.meta.size, tree, 0);

export default (tree) => tree.children
  .map(n => [n.name, calculateSizes(n)])
  .sort(([, size1], [, size2]) => size2 - size1);
// END
