/* Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66


Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000

Runtime: 62 ms, faster than 94.57% of JavaScript online submissions for Sum of All Odd Length Subarrays.
Memory Usage: 41.7 MB, less than 98.75% of JavaScript online submissions for Sum of All Odd Length Subarrays.
*/
/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
  let len = arr.length, sums = 0;
  if(len % 2 > 0) {
    sums = arr.reduce((prev, current) => prev + current);
  }
  // if(len % 2 > 0) {
  //   sums += sums;
  // }
  console.log(`sums=`, sums);

  //let odd = 3;

  for(let odd=1; odd<len; odd +=2) {
    for(let i=0; i<len-odd+1; i++) {
      for(let j=i; j<i+odd; j++) {
        if(j < len) {
          sums += arr[j];
        } else continue;
        console.log(i,j, arr[j], sums);
      }
    }
  }
  return sums;
};

//let arr = [1,2,3,4,5];
//let arr = [1,4,2,5,3];
//let arr = [1,2];
//let arr = [10,11,12];
let arr = [620,68,903,919,916,974,316,990,272,42,411,65,884,629,166,470,285,600,763,373,843,856,657,438,972,821,713,923,439,738,234,456,358,235,10,268,355,389,689,622,847,384,36,904,697,847,370,768,915,864,744,443,834,157,487,531,270,309,419,445,746,473,192,367,627,800,150,213,690,512,448,264,481,763,168,643,683,840,216,536,42,287,214,606,292,247,50,857,931,41,929,157,946,31,548,283,960,749,155,853];
console.log(sumOddLengthSubarrays(arr));
