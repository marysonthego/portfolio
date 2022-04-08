//You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

//Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {

  console.log(`nums: `, nums);
  console.log(`length: `, nums.length);
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(`i % 2 = `, i, i%2);
    if(i % 2 === 0) {
    evenSum += nums[i];
  } else {
    oddSum += nums[i];
  }
}

  console.log(`evenSum = `, evenSum);
  console.log(`oddSum = `, oddSum);
  if(evenSum > oddSum) {
    return evenSum;
  } else {
    return oddSum;
  }
};

rob([0, 1, 2, 3, 4]);
rob([2,1,1,2]);
