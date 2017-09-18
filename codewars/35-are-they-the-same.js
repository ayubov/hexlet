/* Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two
 arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the
  elements in a squared, regardless of the order. */

const comp = (arr1, arr2) => {
    if (!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
      return false;
    }
    const first = arr1.slice().map(e => e * e).sort((a, b) => a - b).join('');
    const second = arr2.slice().sort((a, b) => a - b).join('');
    return first === second;
    }