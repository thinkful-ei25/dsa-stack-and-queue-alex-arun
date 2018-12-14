'use strict';

const { Queue, display } = require('./queue');

/*

What form does my input take?

Array representing the in-order arrivals
Each item in array is an object with the form:
  { name: 'a name', gender: x in ('M', 'F') }


Output: Object:
{
  pairs: (maleName, femaleName)
  spareMen: []
  spareWomen: []
}

Example:

[ {Jane, F} , {Frank, M}, {John, M}, {Sherlock, M}, {Madonna, F}, {David, M},
  {Christopher, M}, {Beyonce, F} ]

Ouput:
{
  pairs: [[Frank, Jane], [John, Madonna], [Sherlock, Beyonce]],
  spareMen: [David, Christopher]
  spareWomen: []
}

datastructures:
  pairs: Queue
  spareMen: Queue
  spareWomen: Queue

iterate through input
  if person is Male, add to male queue
  if person is Female add to female queue

while (male queue isn't empty AND female queue isn't empty)
  deuque from both, and create a pair

return {pairs, spareMen, spareWomen}
*/

function squareDanceOff(people) {
  const pairs = new Queue();
  const spareMen = new Queue();
  const spareWomen = new Queue();

  people.forEach(({ name, gender }) => {
    if (gender === 'M') {
      spareMen.enqueue(name);
    } else {
      spareWomen.enqueue(name);
    }
  });

  while (spareMen.first && spareWomen.first) {
    pairs.enqueue([spareMen.dequeue(), spareWomen.dequeue()]);
  }

  return {
    pairs,
    spareMen,
    spareWomen,
  };
}

function testSqDo() {
  const line = [
    { name: 'Jane', gender: 'F' },
    { name: 'Frank', gender: 'M' },
    { name: 'John', gender: 'M' },
    { name: 'Sherlock', gender: 'M' },
    { name: 'Madonna', gender: 'F' },
    { name: 'David', gender: 'M' },
    { name: 'Christopher', gender: 'M' },
    { name: 'Beyonce', gender: 'F' },
  ];

  const { pairs, spareMen, spareWomen } = squareDanceOff(line);

  console.log('Pairs:');
  display(pairs);

  console.log('\nUnpaired men');
  display(spareMen);

  console.log('\nUnpaired women');
  display(spareWomen);
}

testSqDo();
