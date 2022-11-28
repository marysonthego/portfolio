// 'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for (let i=0; i< arr.length; i++) {
        if(arr[i] === 0) {
            zero++;
        } else if(arr[i] > 0) {
            pos++;
        } else {
            neg++;
        }
    }
    console.log(pos);
    console.log(neg);
    console.log(zero);
    pos = (pos/arr.length).toFixed(6);
    neg = (neg/arr.length).toFixed(6);
    zero = (zero/arr.length).toFixed(6);
    console.log(pos);
    console.log(neg);
    console.log(zero);
}
let arr = [2, 4, 6, 8, -9, -7, -5, -3, -1, 0 ]

plusMinus(arr);
// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     plusMinus(arr);
// }
