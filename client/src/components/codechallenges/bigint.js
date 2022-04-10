//'use strict';
/*
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let sorted = arr.sort((a, b) => {return a - b});
    let small = 0;
    for (let i=0; i<sorted.length-1; i++) {
        small += sorted[i];
    }
    let large = 0;
    for (let i=1; i< sorted.length; i++) {
        large += sorted[i];
    }

    console.log(small + ' ' + large);
}

//function main() {

  //  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
let arr = [1,2,3,4,5];
miniMaxSum(arr);
    //}

