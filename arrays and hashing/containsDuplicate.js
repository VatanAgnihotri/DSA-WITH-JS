// Given an integer numsay nums, return true if any value appears at least twice in the numsay, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
  //With Set
  // const hashSet = new Set();
  // for (let i = 0; i < nums.length; ++i) {
  //   if (hashSet.has(nums[i])) return true;
  //   else hashSet.add(nums[i]);
  // }
  // return false;

  //With Object
  const hashMap = {};
  for (let num of nums) {
    if (hashMap[num]) return true;
    hashMap[num] = true;
  }
  return false;
};
