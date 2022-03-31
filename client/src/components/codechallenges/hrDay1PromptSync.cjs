const prompt = require('prompt-sync')({sigint: true});

function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  var i2;
  var d2;
  var s2;

  i2 = prompt('Enter an integer: ');
  i2 = parseInt(i2) + i;
  d2 = prompt('Enter a float: ');
  d2 = parseFloat(d2) + d;
  s2 = prompt('Enter a string: ');

  console.log(i2);
  console.log(d2.toFixed(1));
  console.log(s+s2);
}
main();

//install coderunner extension
//Go to preferences -> Settings -> Select Extensions -> Run Code Config , Then enable the "Run in Terminal" option.
