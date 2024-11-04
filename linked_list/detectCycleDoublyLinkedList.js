// Question:: Implement a function to detect if a doubly linked list has a cycle.
//Soluton when we only have head information.

const detectCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
