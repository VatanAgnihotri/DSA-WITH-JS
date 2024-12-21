// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

let threeSum = function (nums) {
  //SOLUTION 1
  // const sortedArr = nums.sort((a, b) => a - b);
  // const hashMap = new Map();
  // sortedArr.forEach((num, index, arr) => {
  //   if (num !== arr[index - 1]) {
  //     let left = index + 1;
  //     let right = arr.length - 1;
  //     while (left < right) {
  //       if (num + (arr[left] + arr[right]) < 0) {
  //         left++;
  //         continue;
  //       }
  //       if (num + (arr[left] + arr[right]) > 0) {
  //         right--;
  //         continue;
  //       }
  //       if (num + (arr[left] + arr[right]) === 0) {
  //         if (!hashMap.has(`[${num}, ${arr[left]}, ${arr[right]}]`))
  //           hashMap.set(`[${num}, ${arr[left]}, ${arr[right]}]`, [
  //             num,
  //             arr[left],
  //             arr[right],
  //           ]);
  //         right--;
  //       }
  //     }
  //   }
  // });
  // return [...hashMap.values()];

  //Solution 2
  nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let p = nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (p + nums[l] + nums[r] === 0) {
        results.push([p, nums[l], nums[r]]);
        l++;
        while (nums[l] == nums[l - 1] && l < r) {
          l++;
        }
      }
      if (p + nums[l] + nums[r] > 0) r--;
      if (p + nums[l] + nums[r] < 0) l++;
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
