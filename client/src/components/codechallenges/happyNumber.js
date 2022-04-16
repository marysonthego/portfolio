/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
Example 2:

Input: n = 2
Output: false


Constraints:
1 <= n <= 231 - 1

Runtime: 63 ms, faster than 95.75% of JavaScript online submissions for Happy Number.
Memory Usage: 42.6 MB, less than 83.49% of JavaScript online submissions for Happy Number.
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let s = n.toString();
  let len = 0;
  let result = 0;
  let count = 0;
  do {
    count++;
    len = s.length;
    result=0;
    for(let i=0; i< len; i++) {
      result += Math.pow(parseInt(s[i]),2);
      console.log(`result=`, result);
    }
    s = result.toString();
    console.log(`s=`,s, `count=`,count);;

  }while(result > 1 && count < 20)
  if(result === 1) return true;
  return false;
};
//let n = 1;
//let n = 19;
let n = 18;
//let n = 230;
//let n = 49;
console.log(isHappy(n));
