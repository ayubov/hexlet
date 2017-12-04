import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, toString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const select = (query, dom) => {

  const singleTagInQuery = (query,dom) => {
    return reduce((element, acc) => {
      if (hasChildren(element) && !is(head(query), element)) {
        return append(acc, singleTagInQuery(query, children(element)))
      }
      if (is(head(query), element)) {
      return append(acc, l(element));
    }
    return acc;
    }, l(), dom);
}

  const moreThanOneTagInQuery = (query,dom) => {

    const filteredByFirstTag = filter(element => is(head(query), element), dom);

      if (isEmpty(tail(query))) {
        return filteredByFirstTag;
      }
    return reduce((element, acc) => {
      if (hasChildren(element)) {
        return append(acc, moreThanOneTagInQuery(tail(query), children(element)));
      }
    return acc;
    }, l(), filteredByFirstTag)
  };

  if (isEmpty(tail(query))) {
    return singleTagInQuery(query,dom)
    }
    return moreThanOneTagInQuery(query,dom);
};

// END

export const countLeaves = (tree) => {
  if (!isList(tree)) {
    return 1;
  }
  if (isEmpty(tree)) {
    return 0;
  }

  return countLeaves(head(tree)) + countLeaves(tail(tree));
};
