/*
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.
*/

//grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']

function gridChallenge(grid) {
  // Write your code here
let result = "YES";
const matrix = Array.from({length: grid.length}, () =>
  Array.from({length: grid.length}, () => 0));

  for(let f = 0; f < grid.length; f++) {
    matrix[f] = grid[f].split('');
    matrix[f].sort();
  }
  for(let f = 0; f < grid.length; f++) {
    for(let c = 0; c < grid.length-1; c ++) {
      if(matrix[c][f] > matrix[c+1][f]) {
        result = "NO";
      }
    }
    console.log(matrix[f]);
  }
return result;
}

let grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
grid = ['mpxz', 'abcd', 'wlmf']
grid = ['abc', 'hjk', 'mpq', 'rtv']
console.log(`result=`, gridChallenge(grid));
