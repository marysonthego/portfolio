//using recursion
var array1 = [1,2,3,4,5];

function middle(i) {
    if (array1[i] !== undefined) {
       return middle(i+1);
    } else {
       return array1[Math.floor(i / 2)];
   }
}
console.log(middle(0));

// https://stackoverflow.com/questions/74049829/function-that-inserts-a-new-value-in-the-middle-of-an-array
function solution(a, x) {

  let count = a.length+1
  let mid = count/2
      a.splice(mid, 0, x);
  return a;
 }

 let array = [1,2,3,4];
 console.log(solution(array, 99));
 array = [1,2,3,4,5];
 console.log(solution(array, 99));
