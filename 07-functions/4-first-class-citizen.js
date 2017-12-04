/*
index.js
Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:

Количество раз, которое нужно применить функцию к аргументу.
Функцию для применения
Аргумент для применения
apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16))
apply(2, Math.sqrt, 16); // => 2

apply(1, v => v ** 2, 3); // => 9
apply(5, v => v + 10, 3); // => 53
*/

// BEGIN (write your solution here)
const apply = (number, func, arg) => number === 0 ? arg : apply(number - 1, func, func(arg));
export default apply;
// END
