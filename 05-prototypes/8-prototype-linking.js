// Node
// BEGIN (write your solution here)

function Node(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
}
Node.prototype.attributesBuild = function attributesBuild() {
    return Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('');
  };

export default Node;
// END

// PairedTag
import Node from './Node';

// BEGIN (write your solution here)
function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes, body, children]);
}
PairedTag.prototype = Object.create(Node.prototype);
PairedTag.prototype.toString = function toString() {
    return `<${this.name}${this.attributesBuild(this.attributes)}>${this.body}${this.children.map(e => e.toString()).join('')}</${this.name}>`;
};

export default PairedTag;
// END

// SingleTag
import Node from './Node';

// BEGIN (write your solution here)
function SingleTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes, body, children]);
}
SingleTag.prototype = Object.create(Node.prototype);
SingleTag.prototype.toString = function toString() {
    return `<${this.name}${this.attributesBuild(this.attributes)}>${this.body}${this.children.map(e => e.toString()).join('')}`;
};

export default SingleTag;
// END
