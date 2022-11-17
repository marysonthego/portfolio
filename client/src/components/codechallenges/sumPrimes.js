/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
sumPrimes(10) should return a number.
Waiting:sumPrimes(10) should return 17.
Waiting:sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {
  var res = 1;
  var arr = [];
  var counter = 1;
  while (counter <= num) {
    if (arr.filter(function(v) { return this % v === 0; }, counter).length < 2) {
      arr.push(counter);
      res += counter;
    }
    counter += 2;
  }
  return res;
}

console.log(sumPrimes(10));
