//Question: Implement a Method called removeDuplicates to remove duplicate elements from a unsorted linked list.
//Solution without head, tail and length information.

const removeDuplicates = (list) => {
  const uniqueSet = new Set();
  const head = list;
  let temp = head;
  let prv = null;
  while (temp) {
    if (!uniqueSet.has(temp.val)) {
      uniqueSet.add(temp.val);
      prv = temp;
    } else {
      prv.next = temp.next;
    }
    temp = temp.next;
  }
  return head;
};

console.log(
  `List :: ${JSON.stringify(
    removeDuplicates({
      val: 1,
      next: {
        val: 2,
        next: {
          val: 2,
          next: {
            val: 1,
            next: {
              val: 2,
              next: { val: 2, next: { val: 4, next: { val: 4, next: null } } },
            },
          },
        },
      },
    })
  )}`
);
