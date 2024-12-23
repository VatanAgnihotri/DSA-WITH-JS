// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

const characterReplacement = (s, k) => {
  let l = 0;
  let r = 0;
  const countMap = {};
  let maxFreq = 0;
  let maxLength = 0;

  while (r < s.length) {
    countMap[s[r]] = (countMap[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, countMap[s[r]]);
    while (r - l + 1 - maxFreq > k) {
      countMap[s[l]]--;
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }
  return maxLength;
};
