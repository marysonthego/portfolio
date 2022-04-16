//Given an integer number n, return the difference between the product of its digits and the sum of its digits.

//1 <= n <= 10^5
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// Runtime: 75 ms, faster than 60.29% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 42.2 MB, less than 51.32% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
  let y = n.toString(10);
  let nums = [...y.split('')];
  //console.log(nums);
  let product = 1;
  let sum = 0;
  for(let i=0; i<nums.length; i++) {
    product *= parseInt(nums[i]);
    sum += parseInt(nums[i]);
  }
  return product - sum;
};

//let n = 234;
let n = 1;
console.log(subtractProductAndSum(n));
