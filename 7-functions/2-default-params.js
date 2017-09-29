/*
substr.js
Реализуйте и экспортируйте по умолчанию функцию substr, которая возвращает подстроку из переданной строки. Подстрокой называется любая выбранная часть строки. Функция принимает на вход три параметра:

Строка
Начальный индекс. Значение по умолчанию: 0.
Длина подстроки. Значение по умолчанию: длина строки.
У этой функции множество вариантов поведения:

Если переданная длина отрицательная, то внутри она становится единицей
Если переданная длина + начальный индекс выходят за границу строки, то берется подстрока от индекса до конца строки
Если начальный индекс отрицательный, то внутри он становится нулем
По-умолчанию возвращается сама строка:

substr(''); // => ''
substr('abba'); // => abba
substr('abba', 0, 1); // => a
substr('abba', 1, 2); // => bb
substr('abba', -10, 2); // => ab
substr('abba', -1, 100); // => abba
substr('abba', -1, -1); // => a
substr('abba', 1, -10); // => b
*/

import { getLength } from './strings';

// BEGIN (write your solution here)
const substr = (string, start = 0, length = getLength(string) - 1) => {
  if (start === 0 && length === getLength(string) - 1) {
    return string;
  }
  let actualLength = length;
  let actualStart = start;
  if (actualLength < 0) {
    actualLength = 1;
  }
  if (actualStart + actualLength > getLength(string) - 1) {
    actualLength = getLength(string) - 1 - actualStart;
  }
  if (actualStart < 0) {
    actualStart = 0;
  }
  let result = '';
  for (let i = 0; i < actualLength; i += 1) {
    result += string[actualStart + i];
  }
  return result;
};

export default substr;
// END
