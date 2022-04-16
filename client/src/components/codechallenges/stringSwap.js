/* You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.



Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.


Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.

The answer is false if the number of nonequal positions in the strings is not equal to 0 or 2.
Check that these positions have the same set of characters.

Runtime: 71 ms, faster than 73.09% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
Memory Usage: 42.3 MB, less than 46.48% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  console.log(`s1=`,s1);
  console.log(`s2=`,s2);
  let count = 0;
  let start = [];
  for (let i=0; i<s1.length; i++) {
    if(s1.charAt(i) != s2.charAt(i)) {
      count++;
      start.push(i, s1.charAt(i), s2.charAt(i));
      console.log(`start=`, start);
    }
  }
  if(count === 0) {
    return true;
  } else if(count != 0 && count != 2) {
    return false;
  } else if((start[1] === start[5]) &&
      (start[2] === start[4])) {
        return true;
  } else return false;
};

//let s1 = 'abcdefghijklmn';
let s1 = "caa";
//let s2 = 'abcdefghijkmln';
let s2 = "aaz";
console.log(areAlmostEqual(s1, s2));
