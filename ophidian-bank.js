'use strict';

const {Queue} = require('./queue');

/*
input: # of "minutes"
output: console.log(person.first)

existing and non modified queue
relevance of minutes to queue process
relevance of time in general

person in front(back in queue, success or fail)
{
  ID: 0,
  restarted: 0
}

input is # of iterations in for loop
Build the queue, console.log(queue.first),
dequeue from the front with 75% success rate, 
other 25% is enqueued & restarted++, (queue.last) or dequeue

*/

function simulateBank(min){
  const bankQueue = new Queue();
  for(let i=0; i<=min; i++){
    const success = Math.random();
    bankQueue.enqueue({
      ID: i,
      restarted: 0
    });

    const customer = bankQueue.dequeue();
    console.log(customer);

    if(success > .75){
      bankQueue.enqueue(customer);
      customer.restarted++;
      console.log(`Customer ${customer.ID} has been moved to the back of the line.`);
    }
  }
}

simulateBank(20);
