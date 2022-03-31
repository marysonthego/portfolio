process.stdin.resume();
process.stdin.setEncoding('ascii');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

rl.on('line', function(line){
  readLine();
    console.log(line);
})

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
var i2;
var d2;
var s2;

//const input_stdin_array = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // Read and save an integer, double, and String to your variables.
i2= parseInt(input_stdin_array[0]);
d2= parseFloat(input_stdin_array[1]);
s2= input_stdin_array[2];
i2 = i+i2;
d = parseFloat(d);
d2 = d+d2;
    // Print the sum of both integer variables on a new line.
console.log(i2);
    // Print the sum of the double variables on a new line.
console.log(d2.toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
console.log(s+s2);
}
