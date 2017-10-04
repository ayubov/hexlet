// solution
import _ from 'lodash'; // eslint-disable-line

import buildNode from './buildNode';

// BEGIN (write your solution here)
const propertyAction = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => _.find(propertyAction, ({ check }) => check(arg));

const parseAst = html => html.slice(1).reduce((acc, arg) => {
  const { name } = getPropertyAction(arg);
  let processedArg = arg;
  if (name === 'children') {
    processedArg = arg[0] instanceof Array ? arg.map(parseAst) : parseAst(arg);
  }
  return { ...acc, [name]: processedArg };
}, {
  name: html[0], body: '', attributes: {}, children: [],
});

const parse = (html) => {
  const ast = html instanceof Array ? parseAst(html) : html;
  return ast.children.length === 0 ? buildNode(ast.name, ast.attributes, ast.body) :
    buildNode(ast.name, ast.attributes, ast.body, ast.children.map(parse));
};
export default parse;
// END

// SingleTag
import Node from './Node';

// BEGIN (write your solution here)
export default class extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes, body, children);
  }
  toString() {
    return `<${this.name}${this.attributesBuild()}>${this.body}${this.children.map(e => e.toString()).join('')}`;
  }
}
// END

// PairedTag
import Node from './Node';

// BEGIN (write your solution here)
export default class extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes, body, children);
  }
  toString() {
    return `<${this.name}${this.attributesBuild()}>${this.body}${this.children.map(e => e.toString()).join('')}</${this.name}>`;
  }
}
// END

// Node
// BEGIN (write your solution here)
export default class {
    constructor(name, attributes = {}, body = '', children = []) {
      this.name = name;
      this.attributes = attributes;
      this.body = body;
      this.children = children;
    }
    attributesBuild() {
      return Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('');
    }
  }
  // END
  
