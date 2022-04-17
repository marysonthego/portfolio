/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.



Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.


Constraints:

1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.

Follow up: Could you find an O(nums1.length + nums2.length) solution?

Runtime: 77 ms, faster than 72.03% of JavaScript online submissions for Next Greater Element I.
Memory Usage: 43.7 MB, less than 72.11% of JavaScript online submissions for Next Greater Element I.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
   //initialize result with -1's
   let result = Array.from({length: nums1.length}, () => -1);
   //i = nums2 index of nums1 num
   let i = 0;

  nums1.forEach((num, idx) => {

    i = nums2.findIndex(n => n === num);
    console.log(`i=`,i,`num=`, num);

    for(let j=i; j < nums2.length; j++) {
      if(num < nums2[j]) {
        result[idx] = nums2[j];
        break;
      };
    };
  });
return result;
};

//let nums1 = [4,1,2], nums2 = [1,3,4,2];
let nums1 = [2,4], nums2 = [1,2,3,4];
console.log(nextGreaterElement(nums1, nums2));
