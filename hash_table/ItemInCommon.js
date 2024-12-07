// Question: Write a JS function itemInCommon, that takes 2 arrays as parameters and return a boolean value indication whether there is atleast one element common to both arrays.

const itemInCommon = (arr1, arr2) => {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) return true;
  }
  return false;
};

console.log(itemInCommon([2, 3, 3], [1, 4, 5]));
