//Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

//The input must be a binary string of length 32.
// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

//Runtime: 58 ms, faster than 97.83% of JavaScript online submissions for Number of 1 Bits.
//Memory Usage: 43.6 MB, less than 20.76% of JavaScript online submissions for Number of 1 Bits.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

 var hammingWeight = function(n) {
  let y = n.toString(2);
console.log(y);
let ones = Array.from(y).filter(x => x == 1);
console.log(ones.length);
  return ones.length;
};

//let n = '00000000000000000000000000001011';
//let n = 00000000000000000000000010000000;
let n = 1111111111111111111111111111101;

hammingWeight(n);
