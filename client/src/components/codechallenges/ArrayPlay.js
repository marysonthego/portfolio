import React from 'react';

export  const ArrayPlay = () => {

  const arNums = [1,2,3,4,5,6,7,8,9];
  const arStrs = ['a', 'b', 'c', 'd', 'e'];
  const arMultiDim = [1, 2, 3, ['a','b','c'], 4, 5, 6];

  console.log(`arNums = [1,2,3,4,5,6,7,8,9]`);
  console.log(`arStrs = ['a', 'b', 'c', 'd', 'e']`);

  console.log(`\nconcat`);
  console.log(`array3 = array1.concat(array2) returns a new array`);
  const arConcat = arNums.concat(arStrs);
  console.log(`arConcat = arNums.concat(arStrs)`, arConcat);

  console.log(`\ncopyWithin`);
  console.log(`array1.copyWithin(targetIndex, startIndex, endIndex) copies from startIndex to endIndex at targetIndex`);
  const arCopyWithin = arNums.copyWithin(0, 4, 5);
  console.log(`arCopyWithin = arNums.copyWithin(0, 4, 5)`, arCopyWithin);

  console.log(`\nevery`);
  console.log(`array1.every(test) returns true if every element in array passes the test`);
  const test = (current) => current < 7;
  console.log(arNums.every(test));

  console.log(`\nfill`);
  console.log(`array1.fill(fillValue, startIndex, endIndex)  modifies original array`);
  console.log(arStrs.fill(0, 1, 2));

  console.log(`\nfilter`);
  console.log(`let newArray = array1.filter(element, index, array) => ()`);
  console.log(`let unique = newArray.filter((e, i, a) => a.indexOf(e) === i)`);

  console.log(`\nfind`);
  console.log(`let found = array1.find(element => element > 10) returns first matching element or undefined`)

  console.log(`\nfindIndex`);
  console.log(`let found = array1.findIndex(element => element > 10) returns index of first matching element or -1`);

  console.log(`\nflat`);
  console.log(`arMultiDim: `, arMultiDim);
  console.log(`let newArray = arMultiDim.flat(depth) default depth = 1`);
  console.log(`newArray: `, arMultiDim.flat(2));

  console.log(`\nforEach`);
  console.log(`array1.forEach(element => element+2) executes the function on each element`);

  console.log(`\nfrom`);
  console.log(`let newArray = Array.from(arNums, element => element * 10)`);
  let nArray = Array.from(arNums, element => element * 10);
  console.log(nArray);

  console.log(`\nincludes`);
  console.log(`console.log(arStr.includes('d'))determines whether an array contains the element`);
  console.log(`arStrs: `, arStrs);
  console.log(arStrs.includes('d'));

  console.log(`\nindexOf`);
  console.log(`see findIndex`);
  console.log(`let found = array.indexOf(element, startIndex) returns index of first matching element starting from startIndex or -1 if not found`);

  console.log(`\nisArray`);
  console.log(`Array.isArray(valueToCheck) returns true/false`);
  console.log(`Array.isArray(arNums): `, Array.isArray(arNums));





}

ArrayPlay();
