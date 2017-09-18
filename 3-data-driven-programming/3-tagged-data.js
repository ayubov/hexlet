// solution.js:


import { cons, car, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { getName as getSimpleCardName, damage as simpleCardDamage } from './simpleCard'; // eslint-disable-line
import { getName as getPercentCardName, damage as percentCardDamage } from './percentCard'; // eslint-disable-line
import { typeTag } from './type'; // eslint-disable-line

const isSimpleCard = card => typeTag(card) === 'SimpleCard';
const isPercentCard = card => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
  if (health1 <= 0) {
          return cons(cons(car(head(log)), `${name1} был убит`), log);
        }
        const card = customRandom(cards)
        let cardName;
        let damage;
        if (isSimpleCard(card)) {
        cardName = getSimpleCardName(card);
        damage = simpleCardDamage(card, health2)
        }
        else if (isPercentCard(card)) {
        cardName = getPercentCardName(card);
        damage = percentCardDamage(card, health2)
        }
        const newHealth = health2 - damage;
         console.log(toString(log))
        const message = `Игрок '${name1}' применил '${cardName}'
          против '${name2}' и нанес урон '${damage}'`;
        let stats;
        if (order === 1) {
          stats = cons(cons(health1, newHealth), message);
        } else if (order === 2) {
          stats = cons(cons(newHealth, health1), message);
        }
        const newLog = cons(stats, log);
        return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);

    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);

// simpleCard.js:

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { attach, contents } from './type'; // eslint-disable-line

// BEGIN (write your solution here)
export const make = (name, damage) =>
attach('SimpleCard', cons(name, damage));

export const getName = self => car(contents(self));

export const damage = (self, health) => cdr(contents(self))

      // END
