//Question :: Write a JS function, twoSum, that makes two parameters and returns an array containing the indices of two numbers in the array that sum to the target integer.

const twoSum = (nums, target) => {
  const numObj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (numObj.hasOwnProperty(complement)) return [numObj[complement], i];
    numObj[num] = i;
  }
  return [];
};

console.log(twoSum([4, 5, 10], 9));
