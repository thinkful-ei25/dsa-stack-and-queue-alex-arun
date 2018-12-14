'use strict';

const { Stack, display } = require('./stack');

//input:10101
//output: true

//determine length of string (4)
//loop through length/2 (half)
//push string[i] into stack
//loop through other half of string (other length/2) math.ceiling
//pop from stack and compare to string[i]

//edge cases: 1 (passed), '' (passed)

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack = new Stack();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    stack.push(str[i]);
  }

  for (let i = Math.ceil(str.length / 2); i < str.length; i++) {
    const check = stack.pop();
    if (check !== str[i]) {
      return false;
    }
  }
  return true;
}

function testPalindromes() {
  console.log(is_palindrome('1001'));
  console.log(is_palindrome('10101'));
  console.log(is_palindrome('A man, a plan, a canal: Panama'));
  console.log(is_palindrome('Tauhida'));
}

/*
Palindromes
------------

Examples:
  Valid:
  ()
  (())
  ()()

  Invalid:
  (()()
  )(
  )
  (

Basic alg:
    Iterate through string
    Count number of open, number of close
    If #close > #open : return "invalid" immediately

    If by end of string, #open = #close : "valid"
    Else : "invalid"

Stack-based alg:
    As you iterate through the string:
      if string[i] = '(': push i onto stack
      if string[i] = ')':
        if stack isn't empty:
          stack.pop()
        else:
          return "invalid at {i}"
    if stack isn't empty:
      return "invalid at {stack.pop()}"
    return "valid"
*/

function validParentheses(str) {
  const openParens = new Stack();

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      openParens.push(i);
    } else if (str[i] === ')') {
      if (openParens.top === null) {
        return `Invalid ')' at postion ${i}`;
      }

      openParens.pop();
    }
  }

  if (openParens.top !== null) {
    return `No matching ')' for '(' at position ${openParens.pop()}`;
  }

  return 'Valid';
}

function testValidParens() {
  console.log(validParentheses('()'));
  console.log(validParentheses('())'));
  console.log(validParentheses('(())'));
  console.log(validParentheses('(()'));
  console.log(validParentheses('()()'));
}

testValidParens();


/* 
Sort Stack
Examples:
Input:*5,9,2,7,15,1
Output: *1,2,5,7,9,15

*1,2,3,4,5,6
*6,5,4,3,2,1

Input:*5,9,2,7,15,1
Output: *1,2,5,7,9,15

While stack1 !== empty,
temp variable = stack1.pop
if stack2 is empty, stack2.push(temp)
else if stack2.top.data <= temp, stack2.push(temp)
else, while (stack2 is not empty and stack2.top.data is > temp) => stack1.push(stack2.pop)
(..else) stack2.push(temp)
stack2 will be in descending order
while stack2 isn't empty, stack1.push(stack2.pop)
return stack1

*/

function sortStack(stack){
  const reversed = new Stack();

  while(stack.top !== null){
    const temp = stack.pop();

    while(reversed.top !== null && temp < reversed.top.data){
      stack.push(reversed.pop());
    }

    reversed.push(temp);
  } 

  while(reversed.top !== null){
    stack.push(reversed.pop());
  }

  return stack;
}

function testSortStack(){
  const stack = new Stack();
  [5,9,2,7,15,1].forEach(item => stack.push(item));
  display(stack);
  sortStack(stack);
  console.log("--------");
  display(stack);
}

testSortStack();