Object.prototype.objCustom = function () {}; // objCustom is an inherited property of Object
Array.prototype.arrCustom = function () {}; // arrCustom is an inherited property of Array

const iterable = [3, 5, 7];  // 3,5,7 are values of iterable
iterable.foo = "hello";  // .foo is a property of iterable


console.log('\nFOR...IN iterates over PROPERTIES.')
console.log('\nfor i in iterable');
for (const i in iterable) {
  console.log(i);
}
// "0", "1", "2", "foo", "arrCustom", "objCustom"

console.log('\nfor i in iterable (use hasOwn to not iterate over inherited properties)')
for (const i in iterable) {
  if (Object.hasOwn(iterable, i)) {
    console.log(i);
  }
}
// "0" "1" "2" "foo"

console.log('\nFOR...OF iterates over VALUES.')
console.log("\nfor i of iterable");
for (const i of iterable) {
  console.log(i);
}
// 3 5 7
