import { capitalize } from 'lodash'; // eslint-disable-line

// BEGIN (write your solution here)
export default document => [...document.body.getElementsByTagName('*')]
  .forEach(e => e.setAttribute(
    'class',
    (e.className.includes('-') ? [...e.className.split('-').slice(0, 1), ...e.className.split('-').slice(1).map(capitalize)].join('') : e.className),
  ));
// END
