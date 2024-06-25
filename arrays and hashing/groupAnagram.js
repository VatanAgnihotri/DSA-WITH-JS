// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = (strs) => {
  const hashMap = new Map();

  for (const value of strs) {
    const sortedStr = value.split("").sort().join();
    hashMap.has(sortedStr)
      ? hashMap.set(sortedStr, [...hashMap.get(sortedStr), value])
      : hashMap.set(sortedStr, [value]);
  }

  return [...hashMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
