//Question:: Implement a member function called reverse() that reverses the nodes of a doubly linked list.
//Soluton when we only have head information.

const reverse = (list) => {
  let curr = list;
  let prev = null;
  while (curr) {
    curr.prev = curr.next;
    curr.next = prev;
    prev = curr;
    curr = prev?.prev;
  }
  return list;
};
