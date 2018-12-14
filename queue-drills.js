'use strict';

const { Queue, peek, display } = require('./queue');

function main() {
  const starTrek = new Queue();

  ['Kirk', 'Spock', 'Uhura', 'Sulu', 'Checkov'].forEach((i) => starTrek.enqueue(i));
  display(starTrek);

  console.log('---');

  starTrek.dequeue();
  starTrek.dequeue();
  display(starTrek);
}

main();
