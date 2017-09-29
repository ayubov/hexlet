/*
Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью функций.

table(
  tr(td('one'), td('two')),
  tr(td('three'), td('four')),
);
В результате вызовов, возвращается вот такой html:

<table>
  <tr>
    <td>one</td>
    <td>two</td>
  </tr>
  <tr>
    <td>three</td>
    <td>four</td>
  </tr>
</table>
index.js
Реализуйте и экспортируйте по умолчанию функцию, которая создает следующий HTML:

<table>
  <tr>
    <td>lang</td>
    <td>comment</td>
  </tr>
  <tr>
    <td>php</td>
    <td>statements</td>
  </tr>
  <tr>
    <td>clojure</td>
    <td>expressions</td>
  </tr>
</table>
*/

import { table, tr, td } from './tags';

// BEGIN (write your solution here)
export default () => table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions'))
  );
// END
