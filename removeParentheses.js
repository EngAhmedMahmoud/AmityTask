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
 * Big O => o(n)
 */
const removeParentheses = (str) => {
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
console.log(removeParentheses("foo(foo(bar))blim"));
