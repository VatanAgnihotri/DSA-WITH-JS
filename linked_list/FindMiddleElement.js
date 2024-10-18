//Question: Write a Method called findMiddle that returns the middle element of a singly linked list. If the list has an even number of elements, return the second middle element.

const findMiddle = (list) => {
  let slow = (fast = list);
  while (fast?.next) {
    fast = fast?.next?.next;
    slow = slow.next;
  }
  return slow;
};

console.log(
  `Middle :: ${JSON.stringify(
    findMiddle({
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
