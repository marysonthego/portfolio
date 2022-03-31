var readlineSync = require('readline-sync');
var n = 0;
var ar = [];

n = readlineSync.questionInt("Enter total number of socks ");
console.log('totalSocks = ' + n);

readlineSync.promptLoop(function(input) {
  if(ar.length < n) {
    ar.push(parseInt(input));
    console.log('sockArray = ' + ar);
  };

  sockMerchant(n, ar);
});

function sockMerchant(n, ar) {
  var result = [];
  console.log('original ar: ' + ar);
  ar.sort();
  console.log('sorted ar: ' + ar );
  let sum = 1;
  for (let i=0; i< ar.length; i++){
    if(ar[i] === ar[i+1]) {
      sum = sum+1;
    } else {
      result.push(sum);
      sum=1;
    }
  }
  console.log('result: ' + result);
  for(let i=0; i<result.length; i++){
    console.log(result[i]);
    let temp = result[i] %= 2;
    console.log('temp: ' + temp);
    //result[i] -= temp;
    if(temp > 0) {
      result[i] -= temp;
    }
    console.log('result: ' + result);
  }
  let totalPairs = result.reduce(
    (previousValue, currentValue) => previousValue + currentValue);
  console.log('totalPairs = ' + totalPairs);
}


//const result = sockMerchant(n, ar);
//console.log(`result`, result);

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// */

