/**
 * This function adds two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each node contains a single digit.
 * The function returns a new linked list representing the sum of the two numbers.
 *
 * Solution:
 * 1. Use a dummy head to simplify list construction.
 * 2. Traverse both linked lists node by node:
 *    - Sum the corresponding digits from both lists and the current carry.
 *    - Compute the new digit (`sum % 10`) and update the carry (`Math.floor(sum / 10)`).
 *    - Create a new node with the digit and append it to the result list.
 * 3. If there's any carry left after processing both lists, add a final node.
 *
 * Time Complexity: O(max(n, m)), where n and m are the lengths of the two input lists.
 * Space Complexity: O(max(n, m)), for the resulting linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyHead = new ListNode(0); // Helps simplify edge cases
  let p = l1,
    q = l2,
    current = dummyHead;
  let carry = 0;

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;
    let sum = carry + x + y;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10); // Add digit node
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  // Add any leftover carry
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}

// Example usage:
const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465
const result = addTwoNumbers(l1, l2); // Should return a list representing 807 (7 -> 0
