/**
 * This function removes duplicates from a sorted array in-place and returns the number of unique elements.
 *
 * Problem Constraints:
 * - The input array `nums` is sorted in non-decreasing order.
 * - You must perform the operation in-place using O(1) extra memory.
 * - The function should return the count of unique elements, and the first part of the array must contain them in sorted order.
 *
 * Solution:
 * 1. Use two pointers:
 *    - `uniqueIndex` to track the position of the last unique element.
 *    - `i` to scan through the array starting from index 1.
 * 2. If `nums[i]` is different from `nums[uniqueIndex]`, it means we've found a new unique element.
 * 3. Increment `uniqueIndex` and update `nums[uniqueIndex]` with `nums[i]`.
 * 4. At the end, the first `uniqueIndex + 1` elements of `nums` contain the unique values.
 *
 * Time Complexity: O(n), where n is the length of the array.
 * Space Complexity: O(1), since we do not use any extra space.
 */

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0; // Pointer for the position of the last unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i]; // Update the next unique position
    }
  }

  return uniqueIndex + 1; // Return the count of unique elements
}

// Example usage:
const nums = [1, 1, 2, 3, 3, 4];
const uniqueCount = removeDuplicates(nums);
console.log(uniqueCount); // Output: 4
