
const fruits1 = [];
fruits1.push('banana', 'apple', 'peach');
console.log(fruits1.length); // 3
fruits1[5] = 'mango';
//console.log(fruits[5]);            // 'mango'
console.log(fruits1);
console.log(Object.keys(fruits1));  // ['0', '1', '2', '5']
console.log(fruits1.length);        // 6
fruits1.length = 10;
console.log(fruits1);              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits1)); // ['0', '1', '2', '5']
console.log(fruits1.length);       // 10
console.log(fruits1[8]);           // undefined

const fruits2 = [];
fruits2.push('banana', 'apple', 'peach');
console.log(fruits2.length); // 3

fruits2.length = 2;
console.log(fruits2);

const newArray = [1];
console.log(newArray.length, newArray);

const myArray = new Array(6); // myArray.length === 6
console.log(myArray.length);
console.log(myArray);

const myArray2 = new Array('test');
console.log(myArray2);
console.log(myArray2.length);

myArray2.length = 0;
console.log(myArray2, myArray2.length);

const stringArray = ['Blue', 'Humpback', 'A', 'a', 'Beluga'];
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']
console.log(stringArray);

// Numeric Sort
const numericArray = [10,2,55,27,99];
function compareNumbers(a, b) {
  return a - b;
}
numericArray.sort(compareNumbers);
console.log(numericArray);
