// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */

 function compareNums(a, b) {
  return a - b;
}

function compareRev(a, b) {
  return b - a;
}

function compareAbs(a, b) {
  return Math.abs(b) - Math.abs(a);
}

 var maximumProduct2 = function(nums) {
  let negArr= Array();
  let posArr= Array();

  let sorted = nums.sort(compareAbs);

  console.log(`sorted`, sorted);
  sorted.forEach((num) => {
    if(num < 0) {
    negArr.push(num);
    } else {
      posArr.push(num);
    }
  });
  let count = sorted.length;
  let negCount = negArr.length;
  let posCount = posArr.length;
  let product = 1;
  let productCount = 0;
  let highest = 0;
  let test1 = 0;
  let test2 = 0;
  let test3 = 0;

  //all nums neg
  if(count - negCount === 0) {
    console.log(`negCount =`, negCount);
    let negSort = sorted.sort(compareRev);
    product = negSort[0] * negSort[1] * negSort[2];
    console.log(`product:`, product);
    return product;

  // all nums pos
  } else if (count - posCount === 0) {
    console.log(`posCount = `,posCount);
    let posSort = sorted.sort(compareRev);
    product = posSort[0] * posSort[1] * posSort[2];
    console.log(`product: `, product)
    return product;
  }

  // if neg nums < 2 only use highest 3 pos nums
  if(negCount < 2) {
    product = 1;
    console.log(`negCount =`, negCount);
      for (let i=0; i < count; i++) {
        if (sorted[i] > -1) {
          console.log(`sorted i =`, i, sorted[i]);
          product = product * sorted[i];
          productCount++;
        }
      }
    console.log(`product:`, product);
    return product;

  //compare 2 highest negNums * highest posNum
  //with only posNums
  } else if (negCount === 2){
    console.log(`negCount =`, negCount);
    test1 = negArr[0] * negArr[1] * posArr[0];
    if (posCount > 2) {
      test2 = posArr[0] * posArr[1] * posArr[2];
    }
    if (test1 > test2) {
      product = test1;
    } else {
        product = test2;
      }
      console.log(`product:`, product);
      return product;

  } else if (negCount > 2 && posCount === 0) {
    console.log(`negCount =`, negCount);
    let negSort = sorted.sort(compareNums)
    console.log(`negSort:`,negSort);
    product = negSort[0] * negSort[1] * negSort[2];
    console.log(`product`,product);
    return product;

  } else if (negCount > 2 && posCount > 0) {
    test2 = negArr[0] * negArr[1] * posArr[0];
    if (posCount > 2) {
      test3 = posArr[0] * posArr[1] * posArr[2]
    }
    if(parseFloat(test1) > parseFloat(test2)){
      highest = test1;
    } else {
      highest = test2;
    }
    if (parseFloat(highest)< parseFloat(test3)) {
      highest = test3;
    }
    product = highest;
    console.log(`product:`, product);
    return product;
  }
};

var maximumProduct = function(nums) {
  let sorted = nums.sort((a,b) => a-b), len = nums.length;
  let res1 = sorted[0]*sorted[1]*sorted[len-1],
      res2 = sorted[len-1]*sorted[len-2]*sorted[len-3]
  console.log(Math.max(res1,res2))
  return Math.max(res1,res2);
};

// maximumProduct([1, 2, -3, 4, -1]);
// maximumProduct([1, 2, -3, 5, -15]);
// maximumProduct([1, 2, -3, 5, 15]);
// maximumProduct([1, -2, -3, 5, -15]);
// maximumProduct([-1, -2, -3, -4]);
// maximumProduct([1, 2, 3, 4]);
// maximumProduct([0,-1,2,3]);

