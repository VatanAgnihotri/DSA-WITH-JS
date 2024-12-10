const bubbleSort = (arr) => {
//   Solution 1  
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

//   Solution 2
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
};

console.log(bubbleSort([-2, 45, 0, 11, -9]));
