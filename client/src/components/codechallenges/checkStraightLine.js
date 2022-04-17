/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.

Runtime: 63 ms, faster than 89.95% of JavaScript online submissions for Check If It Is a Straight Line.
Memory Usage: 44.2 MB, less than 45.48% of JavaScript online submissions for Check If It Is a Straight Line.

*/
/**
 * @param {number[][]} c
 * @return {boolean}
 */
 var checkStraightLine = function(c) {

  var [[x0, y0], [x1, y1]] = c,
    slope = (y1 - y0) / (x1 - x0);

  return (
    c.every(([x, y], i) => (y - y0) / (x - x0) === slope || !i) ||
    c.every(([x, _]) => x == x0)
  );
};

//let c = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
//let c = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
//let c = [[0,0],[0,1],[0,-1]] //true
//let c = [[0,2],[0,3],[0,1]] //true
let c = [[0,0],[0,5],[5,5],[5,0]];
//let c = [[1,2],[2,3],[3,5]];
console.log(checkStraightLine(c));
