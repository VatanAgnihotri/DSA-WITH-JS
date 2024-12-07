//Question :: Write a JS function, findDUplicates. that takes numsay as a parameter and return a new numsay containing all the numbers that appears morethan once in the input numsay.

const findDUplicates = (nums) => {
  const numCounts = {};
  const duplicates = [];
  for (let num of nums) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }
  for (const key in numCounts) {
    if (Object.prototype.hasOwnProperty.call(numCounts, key)) {
      if (numCounts[key] > 1) duplicates.push(key);
    }
  }
  return duplicates;
};

console.log(findDUplicates([1, 2, 1, 3, 4, 4, 4, 1, 4]));
