/*
You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
Output: 2
Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. [2,4] has the smallest index, so return 2.

Input: x = 3, y = 4, points = [[3,4]]
Output: 0
Explanation: The answer is allowed to be on the same location as your current location.

Input: x = 3, y = 4, points = [[2,3]]
Output: -1
Explanation: There are no valid points.

1 <= points.length <= 104
points[i].length == 2
1 <= x, y, ai, bi <= 104

Runtime: 118 ms, faster than 65.89% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
Memory Usage: 51.1 MB, less than 21.79% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
  let validPts =  Array.from({length: points.length}, () => -1);
  let j=0;
  for (let i=0; i< points.length; i++) {
    if(x === points[i][0] || y === points[i][1]) {
      console.log(`x=`,x, points[i][0], `y=`, y, points[i][1], `j=`, j);
      validPts[j] = i;
      j++;
    }
  }
  console.log(`j=`,j, `validPts=`,validPts);
  if(j === 1) {
    return validPts[j-1];
  } else if(j > 1) {
    let dist = -1;
    let nextDist = -1;
    let point = -1;
    j--;
    for(let k=j; k>=0; k--) {
      console.log(`k=`,k,`j=`, j,`validPts=`, validPts);
      console.log(`k=`,k,`validPts[k]=`,validPts[k]);
      nextDist = Math.abs(x - points[validPts[k]][0]) + Math.abs(y - points[validPts[k]][1]);
      console.log(`dist=`,dist,`nextDist=`,nextDist);
      if(dist === -1 || nextDist <= dist) {
        point = k;
        dist = nextDist;
        console.log(`point=`,point);
      }
    }
    return validPts[point];
  } else {
    return -1;
  }
};

//let x = 3, y = 4, points = [[3,4]];
//let x = 1, y = 1, points = [[1,1], [1,1]];
let x=5, y=1, points=[[1,1],[6,2],[1,5],[3,1]];
//let x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]];
//let x = 3, y = 4, points = [[2,3]];
console.log(nearestValidPoint(x,y,points));
