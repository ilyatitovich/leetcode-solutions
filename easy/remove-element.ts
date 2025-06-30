/**
 * This function removes all occurrences of a given value `val` from the input array `nums` in-place,
 * and returns the number of remaining elements.
 *
 * Problem Constraints:
 * - You must perform the operation in-place using O(1) extra memory.
 * - The relative order of the elements may be changed.
 * - The first `k` elements of `nums` (where `k` is the return value) should contain the elements not equal to `val`.
 *
 * Solution:
 * 1. Use a pointer `k` to mark the position where the next non-`val` element should go.
 * 2. Iterate through each element in the array:
 *    - If `nums[i] !== val`, assign `nums[k] = nums[i]` and increment `k`.
 * 3. This effectively compacts all non-`val` elements at the beginning of the array.
 * 4. Return `k` as the count of elements that are not equal to `val`.
 *
 * Time Complexity: O(n), where n is the length of the array.
 * Space Complexity: O(1), since the operation is done in-place without extra space.
 */

function removeElement(nums: number[], val: number): number {
  let k = 0; // Pointer for the position of the next non-val element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move the non-val element to the next position
      k++;
    }
  }

  return k; // Return the count of elements not equal to val
}
// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;
const newLength = removeElement(nums, val);
console.log(newLength); // Output: 2
