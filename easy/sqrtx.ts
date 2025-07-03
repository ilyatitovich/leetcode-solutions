/**
 * This function computes the integer square root of a non-negative integer `x`.
 * The integer square root is the greatest integer `r` such that `r * r <= x`.
 *
 * Problem:
 * - You are not allowed to use built-in exponent functions like `Math.sqrt`.
 * - You need to return only the **integer part** of the square root.
 *
 * Solution (Binary Search):
 * 1. Use binary search to find the square root in the range [0, x].
 * 2. At each step, calculate `mid * mid`:
 *    - If it equals `x`, return `mid`.
 *    - If it’s less than `x`, store `mid` as a potential result and search the right half.
 *    - If it’s greater than `x`, search the left half.
 * 3. When the loop ends, return the last `mid` value that satisfied `mid * mid <= x`.
 *
 * Time Complexity: O(log x), due to binary search.
 * Space Complexity: O(1), using only a constant number of variables.
 */

function mySqrt(x: number): number {
  let left = 0,
    right = x,
    result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2),
      square = mid * mid;

    if (square === x) {
      return mid; // Found the exact square root
    } else if (square < x) {
      result = mid; // Update result to the last valid mid
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return result; // Return the largest integer whose square is <= x
}

// Example usage:
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(16)); // Output: 4
console.log(mySqrt(0)); // Output: 0
console.log(mySqrt(1)); // Output: 1
