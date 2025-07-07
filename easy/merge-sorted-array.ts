/**
 * This function merges two sorted arrays `nums1` and `nums2` into a single sorted array in-place.
 * The result is stored in `nums1`, which has enough space to hold the elements of both arrays.
 *
 * Problem:
 * - `nums1` has length `m + n`, where the first `m` elements are the actual values and the rest are zeros.
 * - `nums2` has `n` elements.
 * - You must merge `nums2` into `nums1` as one sorted array, modifying `nums1` in-place.
 *
 * Solution (Two-Pointer from the End):
 * 1. Use three pointers:
 *    - `p1` at the end of the valid part of `nums1` (index `m - 1`)
 *    - `p2` at the end of `nums2` (index `n - 1`)
 *    - `p` at the very end of `nums1` (index `m + n - 1`)
 * 2. Compare `nums1[p1]` and `nums2[p2]`, and place the larger value at `nums1[p]`.
 * 3. Move the pointers accordingly and repeat until either array is fully merged.
 * 4. If there are leftover elements in `nums2`, copy them into `nums1`.
 *    - No need to handle leftovers in `nums1`—they’re already in place.
 *
 * Time Complexity: O(m + n), each element is visited once.
 * Space Complexity: O(1), in-place merge with constant extra space.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1; // Pointer for end of nums1's valid elements
  let p2 = n - 1; // Pointer for end of nums2
  let p = m + n - 1; // Pointer for end of nums1 (total length)

  // Merge from the back
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If any elements left in nums2, copy them
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}
