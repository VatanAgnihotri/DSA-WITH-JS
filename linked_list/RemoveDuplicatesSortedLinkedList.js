//Question: Implement a Method called removeDuplicates to remove duplicate elements from a sorted linked list.
//Solution without head, tail and length information.
const removeDuplicates = (list) => {
  let head = list;
  let temp = head;
  while (temp?.next) {
    if (temp.next.val === temp.val) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

console.log(
  `List :: ${JSON.stringify(
    removeDuplicates({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 1,
          next: {
            val: 1,
            next: {
              val: 2,
              next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
            },
          },
        },
      },
    })
  )}`
);
