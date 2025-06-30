/**
 * This function merges two sorted singly linked lists into one sorted list.
 *
 * Input:
 * - Two linked lists (`list1` and `list2`) sorted in non-decreasing order.
 *
 * Output:
 * - A single merged and sorted linked list.
 *
 * Solution:
 * 1. Handle base cases: if one list is null, return the other.
 * 2. Choose the smaller head node between `list1` and `list2` as the head of the merged list.
 * 3. Use a pointer `current` to build the merged list by comparing values at each step.
 * 4. Once one list is exhausted, link the rest of the other list (since it's already sorted).
 *
 * Time Complexity: O(n + m), where n and m are the lengths of the input lists.
 * Space Complexity: O(1), since we're reusing the existing nodes and not allocating new ones.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Base cases
  if (!list1) return list2;
  if (!list2) return list1;

  // Pick the head of the merged list
  let mergedHead: ListNode;
  if (list1.val < list2.val) {
    mergedHead = list1;
    list1 = list1.next;
  } else {
    mergedHead = list2;
    list2 = list2.next;
  }

  // Build the merged list
  let current = mergedHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the remaining part
  current.next = list1 ? list1 : list2;

  return mergedHead;
}

// Example usage
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(list1, list2);

// Function to print the merged list
function printList(head: ListNode | null): void {
  let current = head;

  while (current) {
    process.stdout.write(current.val + " ");
    current = current.next;
  }

  console.log();
}
printList(mergedList); // Output: 1 1 2 3 4 4
