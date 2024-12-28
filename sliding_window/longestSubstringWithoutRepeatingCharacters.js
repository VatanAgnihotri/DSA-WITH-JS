// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s) => {
  // Solution 1
  // let l = (r = 0);
  // let hashSet = new Set();
  // let maxLength = 0;
  // while (r < s.length) {
  //   if (!hashSet.has(s[r])) {
  //     hashSet.add(s[r]);
  //     maxLength = Math.max(maxLength, r - l + 1);
  //     r++;
  //   } else {
  //     hashSet.delete(s[l]);
  //     l++;
  //   }
  // }
  // return maxLength;

  // Solution 2
  let l = 0;
  let window = 0;
  let set = new Set();
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    window = Math.max(window, r - l + 1);
  }
  return window;
};

console.log(lengthOfLongestSubstring("pwwkew"));
