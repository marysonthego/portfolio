//If compareFunction is supplied, all non-undefined array elements are sorted according to
//the return value of the compare function
//(all undefined elements are sorted to the end of the array, with no call to compareFunction)

function compareNumbers(a, b) {
  return a - b;
}
function compareReverse(a, b) {
  return b - a;
}

function findTheMedian() {

  let arr = [1,4,9,10,5,22,99];
  console.log(`arr before`, arr)
  arr.sort();
  console.log(`\nNumbers are sorted as strings:\n arr.sort()`, arr, )

  let sorted = arr.sort(compareReverse);
  console.log(`arr after sort compareReverse:\n`, sorted);

  let med = Math.floor(arr.length/2);
  console.log(`len:`,arr.length,` med:`, med);
  console.log(`median value = `, sorted[med]);
}

findTheMedian();

function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}
