/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([2, 10]) should return 2520.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/

function smallestCommons(arr) {
  //const primes = [1, 2, 3, 5, 7, 11];
  let min = 0;
  let max = 0;
  let range = [];

  // set min/max
  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  } else {
    min = arr[0];
    max = arr[1];
  }
  console.log('min=',min, ' max=', max);

  //greatest common denominator
  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  // least common multiple
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // populate range, omit primes 1 & 2
  for (let i = min; i < max + 1; i++) {
    if (i > 2) {
      range.push(i);
      min = i;
    }
  }
    console.log("range is: ", range);

    // for each item in range calc lcm
    let commonMultiple = min;
    for (const i of range) {
      commonMultiple = lcm(commonMultiple, i);
      console.log("range: ", i, " commonMultiple= ", commonMultiple);
    }
    return commonMultiple;
  }

console.log('smallestCommons([1, 5] ',smallestCommons([1, 5]));
console.log('smallestCommons([5, 1] ',smallestCommons([5, 1]));
console.log('smallestCommons([2, 10] ',smallestCommons([2, 10]));
console.log('smallestCommons([1, 13] ',smallestCommons([1, 13]));
console.log('smallestCommons([23, 18] ',smallestCommons([23, 18]));

/*
List the first several multiples of each number.
Look for multiples common to both lists. If there are no common multiples in the lists, write out additional multiples for each number.
Look for the smallest number that is common to both lists.
This number is the LCM.

Find the LCM using the prime factors method.
Find the prime factorization of each number.
Write each number as a product of primes, matching primes vertically when possible.
Bring down the primes in each column.
Multiply the factors to get the LCM.
*/
