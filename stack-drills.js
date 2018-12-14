'use strict';
const {Stack, peek, display} = require('./stack');

function main(){
  const stack = new Stack();

  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');

  console.log(stack);

  peek(stack);

  display(stack);
  
  stack.pop();
  stack.pop();
  display(stack);

}
main();