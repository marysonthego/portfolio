//If compareFunction is supplied, all non-undefined array elements are sorted according to
//the return value of the compare function
//(all undefined elements are sorted to the end of the array, with no call to compareFunction)

function compareNumbers(a, b) {
  return a - b;
}

function findTheMedian() {

  let arr = [1,4,9,10,5,22,99];

  let sorted = arr.sort(compareNumbers);
  console.log(`sorted:`,sorted);
  let med = Math.floor(arr.length/2);
  console.log(`len:`,arr.length,` med:`, med);
  console.log(`median value = `, sorted[med]);
}

findTheMedian();
