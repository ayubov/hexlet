/*
Палиндром — число, слово или текст, одинаково читающееся в обоих направлениях. Например: радар, топот.

solution.js
Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:

import isPalindrome from './solution';

isPalindrome('radar'); // => true
isPalindrome('a'); // => true
isPalindrome('abs'); // => false
Подсказки
Используйте функцию length из модуля strings чтобы узнать длину строки:

length('hello'); // => 5
Используйте функцию substr из модуля strings чтобы получить подстроку из строки:

substr('hello', 0, 4); // => "hell"
*/

import { length, substr } from './strings';

// BEGIN (write your solution here) (write your solution here)
const isPalindrome = (string) => {
  if (length(string) < 2) {
    return true;
  }
  if (string[0] !== string[length(string) - 1]) {
    return false;
  }
  return isPalindrome(substr(string, 1, length(string) - 2));
};

export default isPalindrome;
// END
