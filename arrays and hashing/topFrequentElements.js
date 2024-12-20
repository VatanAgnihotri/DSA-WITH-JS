// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = (nums, k) => {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
  }
  const hashMap1 = new Map(
    [...hashMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k)
  );

  return [...hashMap1.keys()];
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
