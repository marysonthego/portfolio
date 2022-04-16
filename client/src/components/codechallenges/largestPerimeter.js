//Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

//3 <= nums.length <= 104
//1 <= nums[i] <= 106

//Input: nums = [2,1,2]
//Output: 5

//Input: nums = [1,2,1]
//Output: 0

/*
How to Find the Area of a Triangle Without Height?
The area of a triangle can be calculated when only the length of the 3 sides of the triangle are known and the height is not given. In this case, the Heron's formula can be used to find the area of the triangle.
Heron's formula:
A = √s(s−a)(s−b)(s−c)
 where a, b, and c are the sides of the triangle and 's' is the semi-perimeter;
 s = (a + b + c)/2.

Runtime: 93 ms, faster than 90.81% of JavaScript online submissions for Largest Perimeter Triangle.
Memory Usage: 45.7 MB, less than 40.70% of JavaScript online submissions for Largest Perimeter Triangle.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
   //reverse sort
  let s = nums.sort((a,b)=>{return b-a});
  //console.log(`s`,s);
  let sp = -1;
  let nextSp = 0;
  let area = 0;
  for(let i=0; i< s.length-2; i++) {
    nextSp = (s[i] + s[i+1] + s[i+2])/2;
    area = Math.sqrt(nextSp*(nextSp-s[i])*(nextSp-s[i+1])*(nextSp-s[i+2]));
    if(area > 0) {
      if(nextSp > sp) {
        sp = nextSp;
      }
    }
  }
  if(sp > 0) {
    return sp*2;
  } else {
    return 0;
  }
};

//let nums = [2,1,2];  //5
let nums = [1,2,1];//0
console.log(largestPerimeter(nums));
