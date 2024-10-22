// Question: Write a Method called detectCycleStart that returns the node where a cycle begins in a linked list, if there is a cycle.
//Solution without head, tail and length information.

const detectCycleStart = (list) => {
  const head = list;
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }
  if (!fast?.next) return null;
  let entry = head;
  while (entry !== slow) {
    entry = entry.next;
    slow = slow.next;
  }
  return entry;
};

const input = {
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
};

input.next.next.next.next.next.next.next.next = input.next;

console.log(`Cycle Start :: ${detectCycleStart(input)}`);
