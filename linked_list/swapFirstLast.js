// Question:: Implement a member function called swapFirstLast() that swaps the values of the first and last nodes of a doubly linked list.
// Solution when you got only head information
const swapFirstLast = (list) => {
  let head = list;
  let tail = list;
  let next = head.next;
  while (next) {
    tail = next;
    next = next.next;
  }
  let temp = head.val;
  head.val = tail.val;
  tail.val = temp.val;
  return list;
};
