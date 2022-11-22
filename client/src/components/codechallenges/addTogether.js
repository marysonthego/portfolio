/*
Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(23, 30) should return 53.
addTogether(5)(7) should return 12.
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
addTogether("2", 3) should return undefined.
addTogether(5, undefined) should return undefined.

*/

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

 console.log(addTogether(2, 3)); //should return 5.
 console.log(addTogether(23, 30)); //should return 53.
 console.log(addTogether(5)(7)); //should return 12.
 console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); //should return undefined.
console.log(addTogether(2, "3")); //should return undefined.
console.log(addTogether(2)([3])); //should return undefined.
console.log(addTogether("2", 3)); //should return undefined.
console.log(addTogether(5, undefined)); //should return undefined.


// Let's make a function that returns a function
// function adder(val) {
//   function addVal(a) {
//     return a + val;
//   }
//   return addVal;
// }

// // Let's make a function that adds 5
// const add5 = adder(5);
// console.log(add5);

// Let's call our function
//console.log(add5(3));
