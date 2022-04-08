
/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxProduct = function(nums) {
  if (nums.length === 1) return nums[0]

  let result = Math.max(...nums)
  let minProduct = 1
  let maxProduct = 1

  for (const number of nums) {
    /**
     * special case: if we multiply a subarray sequence by 0, its going to be 0 forever,
     * so reset the min and max products to 1 and skip to next loop
     */
    if (number == 0) {
      minProduct = 1
      maxProduct = 1
      continue
    }

    /**
     * We are calculating minProduct using the maxProduct calculated above, so we save
     * the initial maxProduct * number in a temp variable
     */

    let temp = maxProduct * number

    maxProduct = Math.max(number * minProduct, number * maxProduct, number)
    minProduct = Math.min(temp, number * minProduct, number)
    result = Math.max(result, maxProduct)
  }
  console.log(`result`, result);
  return result

};

maxProduct([1, 2, -3, 4, -1]);
