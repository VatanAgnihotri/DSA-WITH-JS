const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
    }
  }
  return arr;
};

console.log(
  insertionSort([12, 11, 15, -10, 9, 11, 2, 3, -13, 14, 0, 4, 5, -6, 7, 8])
);
