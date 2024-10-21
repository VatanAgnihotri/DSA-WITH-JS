//Question: Implement a method called reverseList to reverse a singly linked list in-place. The method should return the head of the reversed list.
//This solution is when we don't know the tail of the linked list.

const reverseList = (head) => {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
console.log(
  `Middle :: ${JSON.stringify(
    reverseList({
      val: 10,
      next: {
        val: 20,
        next: {
          val: 22,
          next: {
            val: 30,
            next: {
              val: 40,
              next: {
                val: 50,
                next: { val: 22, next: { val: 22, next: null } },
              },
            },
          },
        },
      },
    })
  )}`
);
