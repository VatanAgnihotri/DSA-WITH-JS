// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSums = (nums, target) => {
  //Solution 1
  // const hashMap = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   if (hashMap.has(target - nums[i]))
  //     return [hashMap.get(target - nums[i]), i];
  //   hashMap.set(nums[i], i);
  // }

  //Solutin 2
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[target - nums[i]] !== undefined)
      return [hashMap[target - nums[i]], i];
    hashMap[nums[i]] = i;
  }
};

console.log(twoSums([2, 7, 11, 15], 9));
