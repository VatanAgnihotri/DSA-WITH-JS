// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

const minWindow = (s, t) => {
  if (t === "") return "";

  const tMap = {};

  for (let char of t) {
    tMap[char] = (tMap[char] || 0) + 1;
  }
  const need = Object.keys(tMap).length;
  let have = 0;
  const window = {};
  let minLen = Infinity;
  let minWindow = [-1, -1];
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    window[char] = (window[char] || 0) + 1;

    if (tMap[char] && tMap[char] === window[char]) {
      have++;
    }

    while (have === need) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        minWindow = [l, r];
      }
      window[s[l]]--;
      if (tMap[s[l]] && window[s[l]] < tMap[s[l]]) {
        have--;
      }
      l++;
    }
  }
  return minLen === Infinity ? "" : s.slice(minWindow[0], minWindow[1] + 1);
};
