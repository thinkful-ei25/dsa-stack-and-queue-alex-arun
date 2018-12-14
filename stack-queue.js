'use strict';

const {Stack} = require('./stack');

/*
Class, constructor, enqueue(item)[, dequeue()
Enqueue adds to end of queue (top of stack?)
dequeue removes from beginning of queue(top of another stack?)
stack1 contains queue order from first(top) to last (dequeue[pop])
stack2 contains queue order from last(top) to first (enqueue[push])
compare both so they contain the same values 

Example
input: {1,2,3,4,5}
enqueue
  stack2.push(6)
  input: *5,4,3,2,1
  output: *6,5,4,3,2,1

  s2: *6,5,4,3,2,1
  s1: null
  s2.pop()...
  s2: null
  s1: 1,2,3,4,5,6

dequeue
  stack1.pop()
  s1:*2,3,4,5,6
  s2: null

enqueue 
  s1.pop...
  s2:*6,5,4,3,2

  s2.push(7)
  s2:*7,6,5,4,3,2
  s1:null

Enqueue
input: 7
dequeue: forward (top = front)
enqueue: reverse (top = last)

while dequeue isn't empty, enqueue.push(dequeue.pop())  
enqueue.push(7)

Dequeue
dequeue: forward (top = front)
enqueue: reverse (top = last)

while enqueue isn't empty, dequeue.push(enqueue.pop())

dequeue.pop()
*/

class stackQueue{
  constructor(){
    this.top = null;
    this.enq = new Stack();
    this.deq = new Stack();
  }

  enqueue(item){
    while(this.deq.top !== null){
      this.enq.push(this.deq.pop());
    }
    this.enq.push(item);
  }

  dequeue(){
    while(this.enq.top !==null){
      this.deq.push(this.enq.pop());
    }
    return this.deq.pop();
  }
}

function testStackQueue(){
  const SQ = new stackQueue();

  [1,2,3,4,5].forEach(item => SQ.enqueue(item));

  for(let i =0; i<5; i++){
    console.log(SQ.dequeue());
  }
}

testStackQueue();