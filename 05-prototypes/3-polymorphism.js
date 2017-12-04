// PairedTag.js 
// BEGIN (write your solution here)
export default class {
    constructor(name, attributes = {}, body = '', children = []) {
      this.name = name;
      this.attributes = attributes;
      this.body = body;
      this.children = children;
    }
    attributesBuild() {
      return Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('')
    }
    toString() {
      return `<${this.name}${this.attributesBuild()}>${this.body}${this.children.map(e => e.toString()).join('')}</${this.name}>`;
    }
  }
  // END

// SingleTag.js
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
    toString() {
      return `<${this.name}${this.attributesBuild()}>${this.body}${this.children.map(e => e.toString()).join('')}`;
    }
  }
  // END
  // buildNode.js 
  import PairedTag from './PairedTag';
  import SingleTag from './SingleTag';
  
  // BEGIN (write your solution here)
  export default (name, attributes, body, children) => {
    if (['hr', 'br', 'img'].includes(name)) {
      return new SingleTag(name, attributes, body, children);
    }
    return new PairedTag(name, attributes, body, children);
  };
  // END

// solution.js
import _ from 'lodash'; // eslint-disable-line

import buildNode from './buildNode';

// BEGIN (write your solution here)
const propertyAction = [
{
  name: 'body',
  check: arg => typeof arg === 'string'
},
{
  name: 'children',
  check: arg => arg instanceof Array
},
{
  name: 'attributes',
  check: arg => arg instanceof Object
}
];

const getPropertyAction = arg => _.find(propertyAction, ({check}) => check(arg));

const parseAst = (html) => {
 return html.slice(1).reduce((acc, arg) => {
   const { name } = getPropertyAction(arg);
   let processedArg = arg;
   if (name === 'children') {
     processedArg = arg[0] instanceof Array ? arg.map(parseAst) : parseAst(arg);
   }
   return { ...acc, [name]: processedArg };
 }, {
   name: html[0], body: '', attributes: {}, children: [],
 });
};

const parse = (html) => {
  const ast = html instanceof Array ? parseAst(html) : html;
  return ast.children.length === 0 ? buildNode(ast.name, ast.attributes, ast.body) :
buildNode(ast.name, ast.attributes, ast.body, ast.children.map(parse));
}
export default parse;
// END
