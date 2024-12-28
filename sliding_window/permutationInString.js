// Given two strings s1 and s2, return true if s2 contains a
// permutation
//  of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

const checkInclusion = function (s1, s2) {
  //  Solution 1
  // let n1 = s1.length;
  // let n2 = s2.length;

  // if (n1 > n2) return false;

  // const s1Freq = Array(26).fill(0);
  // const s2Freq = Array(26).fill(0);

  // const isArrayEquals = (arr1, arr2) => {
  //   for (let i = 0; i < arr1.length; i++) {
  //     if (arr1[i] !== arr2[i]) return false;
  //   }
  //   return true;
  // };

  // for (let i = 0; i < n1; i++) {
  //   s1Freq[s1.toLowerCase().charCodeAt(i) - 97]++;
  // }
  // for (let i = 0; i < n2; i++) {
  //   s2Freq[s2.toLowerCase().charCodeAt(i) - 97]++;
  //   if (i >= n1) {
  //     s2Freq[s2.toLowerCase().charCodeAt(i - n1) - 97]--;
  //   }
  //   if (isArrayEquals(s1Freq, s2Freq)) return true;
  // }
  // return false;

  
  //Solution 2
  const isArrayEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  let s1Map = Array(26).fill(0);
  let s2Map = Array(26).fill(0);

  for (let char of s1) {
    s1Map[char.charCodeAt(0) - 97]++;
  }
  let l = 0;
  for (let r = 0; r < s2.length; r++) {
    s2Map[s2[r].charCodeAt(0) - 97]++;

    while (r - l + 1 > s1.length) {
      s2Map[s2[l].charCodeAt(0) - 97]--;
      l++;
    }

    if (isArrayEqual(s1Map, s2Map)) return true;
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
