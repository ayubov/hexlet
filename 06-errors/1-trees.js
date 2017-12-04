class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChildren() {
    return this.children.size !== 0;
  }

  hasChild(key) {
    return this.children.get(key) !== undefined
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    if (this.hasChild(key)) {
      this.children.delete(key);
      return true;
    }
    return false;
  }

  getDeepChild(keys) {
    const [key, ...rest] = keys;
    const node = this.getChild(key);
    if (rest.length === 0 || node === undefined) {
      return node;
    }
    return node.getDeepChild(rest);
  }

  getChildren() {
    return [...this.children.values()];

  }
  // END
}

export default Tree;
