/*
Модуль tag, позволяет генерировать html используя функцию build. Она позволяет создать текстовое представление любого парного тега. Принцип работы функции следующий:

Функция build принимает один аргумент, имя тега и возвращает функцию
Новая функция при вызове возвращает текстовое представление соответствующего тега
Каждая такая функция принимает на вход другие теги.
const ul = build('ul');
const li = build('li');

ul(
  li('item 1'),
  li('item 2'),
);
index.js
Реализуйте и экспортируйте по умолчанию функцию, которая генерирует HTML представленный ниже используя функцию build.

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

import build from './tag';

// BEGIN (write your solution here)
const table = build('table');
const tr = build('tr');
const td = build('td');

export default () => table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions'))
  );
