const bubbleSort = (arr) => {
  let i = arr.length;
  let j = 0;
  while (j < i) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
    j++;
    if (j + 1 === i) {
      j = 0;
      i--;
    }
  }
  return arr;
};

console.log(bubbleSort([-2, 45, 0, 11, -9]));
