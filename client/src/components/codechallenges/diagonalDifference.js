
/*

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1+ 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 2.

// Function description

// Complete the diagonalDifference function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return:

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next  lines describes a row,arr[i] , and consists of  n space-separated integers arr[i][j].
*/

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    console.log(`arr:`, arr, `arr.length:`, arr.length);
    let dArr = arr;
    console.log(`2dArr: `, dArr);
    
    let sum1 =0;
    let sum2 =0;
    let x = 0;
    for (let i=0; i<arr.length; i++) {
      sum1 += dArr[i][i];
      console.log(`sum1`, sum1);
      x = arr.length-i-1;
      console.log(`x`, x);
      sum2 += dArr[x][i];
      console.log(`sum2`, sum2);
    }
    console.log(`sum1`, sum1, `sum2`,sum2);
    console.log(Math.abs(sum1-sum2));

    return Math.abs(sum1-sum2);
}

//function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    //const n = parseInt(readLine().trim(), 10);
    let n = 4;
    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        //arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        arr[i] = i+3;
    }

    const result = diagonalDifference(arr);

    console.log(`result:`, result);

    //ws.write(result + '\n');

    //ws.end();
//}
