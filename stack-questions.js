'use strict';

const { Stack } = require('./stack');

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
