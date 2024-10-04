// merge 2 sorted array. A = [1,3,5,7]; B = [2,4,6,8]; output = [1,2,3,4,5,6,7,8]; in js

const mergeSortedArrays = (A, B) => {
  let p1 = 0;
  let p2 = 0;
  const sortedList = [];
  while (p1 < A.length && p2 < B.length) {
    if (A[p1] < B[p2]) {
      sortedList.push(A[p1]);
      p1++;
    }
    if (A[p1] > B[p2]) {
      sortedList.push(B[p2]);A
      p2++;
    }
  }
  while(p1 < A.length){
    sortedList.push(A[p1]);
    p1++
  }
 
  while(p2 < A.length){
    sortedList.push(B[p2]);
    p2++
  }
};

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);
