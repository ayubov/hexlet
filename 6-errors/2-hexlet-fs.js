import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line

// BEGIN (write your solution here)
const getPathParts = (filepath) => {
  const pathArray = filepath.split('');
  return pathArray.reduce((acc,n,index) => {
  if (n === '/') {
    return acc;
  }
  else if (pathArray[index-1] === '/') {
    return acc.concat(n);
  }
  else {
    acc[acc.length-1] = `${acc[acc.length-1]}${n}`
    return acc;
  }
  }, [])
}

// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  isDirectory(filepath) {
    const parts = getPathParts(filepath);
    const current = this.tree.getDeepChild(parts);
  return (current !== undefined) && (current.getMeta().type === 'dir');

  }

  isFile(filepath) {
    const parts = getPathParts(filepath);
    const current = this.tree.getDeepChild(parts);
    return (current !== undefined) && (current.getMeta().type === 'file');
  }

  mkdirSync(filepath) {
    const parts = getPathParts(filepath);
    const portion = parts.splice(0, parts.length - 1);
    const node = portion.length === 0 ? this.tree : this.tree.getDeepChild(portion);
    node.addChild(path.basename(filepath), { type: 'dir' });
  }

  touchSync(filepath) {
    const parts = getPathParts(filepath);
    const portion = parts.splice(0, parts.length - 1);
    const node = portion.length === 0 ? this.tree : this.tree.getDeepChild(portion);
    node.addChild(path.basename(filepath), { type: 'file' });
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }

}
