/**
 * This function removes duplicates from a **sorted** singly-linked list.
 * Only distinct values should remain, and the original list should be modified in-place.
 *
 * Problem:
 * - Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * - Return the modified linked list.
 *
 * Solution (Iterative One-Pass):
 * 1. If the list is empty, return null.
 * 2. Use a pointer `current` starting at the head of the list.
 * 3. Traverse the list:
 *    - If the current node and the next node have the same value, skip the next node (`current.next = current.next.next`).
 *    - Otherwise, move the pointer forward.
 * 4. Continue until the end of the list is reached.
 *
 * Time Complexity: O(n), where n is the number of nodes in the list.
 * Space Complexity: O(1), as we're modifying the list in-place using only a pointer.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// Example usage:
const head = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
);
const modifiedHead = deleteDuplicates(head);
let current = modifiedHead;
while (current) {
  console.log(current.val); // Output: 1, 2, 3
  current = current.next;
}
