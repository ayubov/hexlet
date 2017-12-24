import 'js-polyfills/dom';

// BEGIN
export default document => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, 
  node => (node.parentElement.tagName === 'DIV' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT));

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const pEl = document.createElement('p');
    node.replaceWith(pEl);
    pEl.append(node);
  }
};
// END