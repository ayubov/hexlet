import { sep } from 'path';

// BEGIN (write your solution here)
export default (tree, substr) => {
  const iter = (node, path, acc) => {
    if (node.type === 'file') {
      return node.name.includes(substr) ? [...acc, `${path}${sep}${node.name}`] : acc;
    }
    const newPath = node.name === '/' ? '' : `${path}${sep}${node.name}`;
    return node.children.reduce((newAcc, c) => iter(c, newPath, newAcc), acc);
  };
  return iter(tree, '',[]);
};
// END
