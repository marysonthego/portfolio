/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

Example 1:

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
Example 2:

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

Constraints:
2 <= arr.length <= 1000
-106 <= arr[i] <= 106

/**
 * @param {number[]} arr
 * @return {boolean}
 *
 * Runtime: 60 ms, faster than 96.00% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
Memory Usage: 42.7 MB, less than 31.03% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
 */
 var canMakeArithmeticProgression = function(arr) {
  if(arr.length === 2) {
    return true;
  }
  let sorted = arr.sort((a,b) => {return b-a});
  let prev = sorted[0] - sorted[1];
  let next = 0;
  for(let i=1; i< sorted.length-1; i++) {
    next = sorted[i] - sorted[i+1];
    if(next != prev) {
      return false;
    }
  }
  return true;
};
