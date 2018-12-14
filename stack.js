'use strict';

class _Node{
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    const node= new _Node(data, this.top);
    this.top = node;
  }

  pop(){

    if(this.top === null){
      throw new Error('Can\'t use pop on an empty stack');
    }

    const node = this.top;
    this.top = node.next;
    return node.data;
    
  }

  isEmpty(){
    return this.top === null;
  }
}

function peek(stack){
  if(!stack.isEmpty()){
    console.log(stack.top.data);
    return stack.top.data;
  }
}

function display(stack){
  let node = stack.top;
  while (node !== null){
    console.log(node.data);
    node = node.next;
  }
}

module.exports = {Stack, peek, display};