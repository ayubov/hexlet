// BEGIN (write your solution here)
const downcaseFilenames = (tree) => {
  const newName = tree.type === 'file' ? tree.name.toLowerCase() : tree.name;
  if (!tree.children) {
    return { name: newName, type: tree.type, meta: tree.meta };
  }
  return { name: newName, type: tree.type, meta: tree.meta, children: tree.children.map(downcaseFilenames) };
};

export default downcaseFilenames;
// END