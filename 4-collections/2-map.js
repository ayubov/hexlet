import 'babel-polyfill';

// BEGIN (write your solution here)
export const wordsCount = (words,stopWords) => words.reduce((acc,item) => {
  const itemLowerCase = item.toLowerCase();
  if (stopWords.includes(itemLowerCase)) {
    return acc;
  }
  if (acc.has(itemLowerCase)) {
    acc.set(itemLowerCase, acc.get(itemLowerCase) + 1);
    return acc;
  }
  acc.set(itemLowerCase, 1);
  return acc;}, new Map());
// END
