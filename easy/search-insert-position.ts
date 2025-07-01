/**
 * This function returns the index at which a `target` should be inserted into the sorted array `nums`.
 * If the target already exists in the array, its index is returned.
 * If it does not exist, the index where it would be inserted in order is returned.
 *
 * Problem Constraints:
 * - The input array `nums` is sorted in ascending order.
 * - You must write an algorithm with O(log n) runtime complexity.
 *
 * Solution (Binary Search):
 * 1. Use binary search to look for the target in `nums`.
 * 2. Initialize two pointers: `left` at 0 and `right` at `nums.length - 1`.
 * 3. While `left <= right`, calculate the midpoint `mid`.
 *    - If `nums[mid]` equals `target`, return `mid`.
 *    - If `nums[mid]` is less than `target`, move `left` to `mid + 1`.
 *    - If `nums[mid]` is greater than `target`, move `right` to `mid - 1`.
 * 4. If the target is not found, `left` will be the index where it should be inserted.
 *
 * Time Complexity: O(log n), since we're using binary search.
 * Space Complexity: O(1), constant space.
 */

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left; // The position where the target should be inserted
}

// Example usage:
console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
console.log(searchInsert([1, 3, 5, 6], 0)); // Output: 0
