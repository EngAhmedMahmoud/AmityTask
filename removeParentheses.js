"use strict";
/**
 * Define the problem
 * Given a string of which inculdes parentheses each word inside parentheses should reversed and remove these parentheses
 * Inputs => String
 * Output => String
 */
/**
 * 1- Get The first closed parentheses
 * 2- Get last open parentheses
 * 3- Get the word between open closed and reverse the word
 */
/**
 * Explore with examples for testing
 * Explore with simple example removeParentheses(foo(bar)) return foorab
 * Explore with complex example removeParentheses(foo(foo(bar))blim) return foobaroofblim
 * Explore with invalid inputs removeParentheses return Missed Parameter
 */
/**
 * Big O => o(n)
 */
const removeParentheses = (str) => {
  if (!str) {
    return "Missed Parameter";
  }
  while (true) {
    let closed = str.indexOf(")");
    if (closed === -1) break;
    let opened = str.substring(0, closed).lastIndexOf("(");
    let start = str.substring(0, opened);
    let middle = str
      .substring(opened + 1, closed)
      .split("")
      .reverse()
      .join("");
    let end = str.substring(closed + 1, str.length);
    str = start + middle + end;
  }
  return str;
};
let testCaseOne = removeParentheses("foo(bar)");
let testCaseTwo = removeParentheses("foo(foo(bar))blim");
let testCaseThree = removeParentheses();
console.log(testCaseOne);
console.log(testCaseTwo);
console.log(testCaseThree);
