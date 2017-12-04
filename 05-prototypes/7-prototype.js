// PairedTag
import Node from './Node';

// BEGIN (write your solution here)
function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes, body, children]);
}

PairedTag.prototype.toString = function toString() {
    return `<${this.name}${tythis.attributesBuild(this.attributes)}>${this.body}${this.children.map(e => e.toString()).join('')}</${this.name}>`;
};

export default PairedTag;
// END

// SingleTag
import Node from './Node';

// BEGIN (write your solution here)
function SingleTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes, body, children]);
}

SingleTag.prototype.toString = function toString() {
    return `<${this.name}${this.attributesBuild(this.attributes)}>${this.body}${this.children.map(e => e.toString()).join('')}`;
};

export default SingleTag;
// END

// Node
// BEGIN (write your solution here)
function attributesBuild(attrs) {
    return Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');
  }
export default function(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
    this.attributesBuild = attributesBuild;
}
// END
