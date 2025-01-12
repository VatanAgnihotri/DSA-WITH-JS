// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Example 1:

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:

// Input: heights = [2,4]
// Output: 4

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

var largestRectangleArea = function (heights) {
  const n = heights.length;
  const prev = new Array(n).fill(-1);
  const next = new Array(n).fill(n);
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    while (next.length && heights[stack[stack.length - 1]] > heights[i]) {
      next[stack.pop()] = i;
    }
    stack.push(i);
  }
  stack.length = 0;
  for (let i = n - 1; i > -1; i--) {
    while (next.length && heights[stack[stack.length - 1]] > heights[i]) {
      prev[stack.pop()] = i;
    }
    stack.push(i);
  }

  for (let i = 0; i < n; i++) {
    maxArea = Math.max(maxArea, heights[i] * (next[i] - prev[i] - 1));
  }
  return maxArea;
};
