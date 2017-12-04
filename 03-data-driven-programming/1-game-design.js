import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 < 1) {
      return consList(cons(car(head(log)), `${name1} был убит`),log);
    }
    const card = random(cards);
    const damage = cdr(card)();
    const cardName = car(card);
    const newHealth = health2 - damage;
    const message = `Игрок ${name1} применил ${cardName} против ${name2} и нанес урон ${damage}`;
      const newLog = order === 1 ? consList(cons(cons(health1,newHealth), message),log) : consList(cons(cons(newHealth,health1), message),log);
      return iter(newHealth,name2,health1,name1,order === 1 ? 2 : 1,newLog);
    // END

  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
