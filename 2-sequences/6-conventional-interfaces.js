import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
export const extractHeaders = (html) =>
map(item => node('p',value(item)), filter(item => is('h2', item),html));

export const wordsCount = (tag,word,html) =>
reduce((item,acc) => acc + wc(word,value(item)), 0, filter(element => is(tag, element),html))
// END
