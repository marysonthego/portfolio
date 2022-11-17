/*
Sum All Odd Fibonacci Numbers

Given a positive integer `num`, return the sum of all odd Fibonacci numbers that are less than or equal to `num`.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.

- `sumFibs(1)` should return a number.
- `sumFibs(1000)` should return 1785.
- `sumFibs(4000000)` should return 4613732.
- `sumFibs(4)` should return 5.
- `sumFibs(75024)` should return 60696.
- `sumFibs(75025)` should return 135721.
*/

// return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  let last = num;
  let prev = 0;
  let current = 0;
  let next = 1;
  let sum = 0;

  if(num>current && num<=last) {
    while(next <= last) {
      if(next%2 !== 0) {
        sum += next;
        console.log('next=', next, ' sum=', sum);
      }
      prev = current;
      current = next;
      next = prev + current;
      console.log('prev=', prev,' current=', current, ' next=', next);
    }
  }
  return sum;
}

console.log('sumfib=',sumFibs(1));
console.log('sumfib=',sumFibs(1000));
console.log('sumfib=',sumFibs(4000000));
console.log('sumfib=',sumFibs(4));
console.log('sumfib=',sumFibs(75024));
console.log('sumfib=',sumFibs(75025));
