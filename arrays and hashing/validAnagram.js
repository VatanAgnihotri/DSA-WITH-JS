// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

const validAnagram = (s, t) => {
  // const hashMap1 = new Map();
  // const hashMap2 = new Map();
  // if (s.length !== t.length) return false;
  // for (let i = 0; i < s.length; i++) {
  //   hashMap1.has(s[i])
  //     ? hashMap1.set(s[i], hashMap1.get(s[i]) + 1)
  //     : hashMap1.set(s[i], 1);
  //   hashMap2.has(t[i])
  //     ? hashMap2.set(t[i], hashMap2.get(t[i]) + 1)
  //     : hashMap2.set(t[i], 1);
  // }

  // for (let [key, value] of hashMap1.entries()) {
  //   if (!hashMap2.has(key) || hashMap2.get(key) !== value) return false;
  // }
  // return true;


  
  //Solution 2
  // const first = s.split('').sort().join('');
  // const second = t.split('').sort().join('');
  // return first === second




  //Solution 3
  if (s.length !== t.length) return false;
  const hashMap = {};
  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] = (hashMap[s[i]] || 0) + 1;
    hashMap[t[i]] = (hashMap[t[i]] || 0) - 1;
  }

  for (let count in hashMap) {
    if (hashMap[count] !== 0) return false;
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
