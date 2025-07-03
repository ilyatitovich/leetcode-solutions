/**
 * This function takes an array of digits representing a non-negative integer,
 * and returns the array after adding one to the integer.
 *
 * Problem:
 * - The digits are stored such that the most significant digit is at the head of the array.
 * - Each element in the array contains a single digit.
 * - You must handle cases where the addition causes a carry (e.g., [9, 9] → [1, 0, 0]).
 *
 * Solution:
 * 1. Start from the last digit and add 1 (represented as an initial `carry = 1`).
 * 2. Loop from the end of the array to the start:
 *    - Add `carry` to the current digit.
 *    - If the result is 10, set the digit to 0 and continue carrying over.
 *    - If the result is less than 10, update the digit and stop carrying.
 * 3. If there is still a carry after the loop (e.g. input was [9,9,9]), insert `1` at the start.
 *
 * Time Complexity: O(n), where n is the number of digits.
 * Space Complexity: O(1) auxiliary space (modifies the input array in-place).
 *   - O(n) space is used only for the output array.
 */

function plusOne(digits: number[]): number[] {
  let carry = 1; // Start with the carry of 1 for the plus one operation

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry; // Add the carry to the current digit

    if (digits[i] === 10) {
      digits[i] = 0; // If it becomes 10, set it to 0 and carry over
      carry = 1;
    } else {
      carry = 0; // No more carry needed, exit loop early
      break;
    }
  }

  if (carry > 0) {
    digits.unshift(carry); // If there's still a carry, add it to the front
  }

  return digits;
}

// Example usage:
const digits = [9, 9, 9, 9, 9, 9];
const result = plusOne(digits);
console.log(result); // Output: [1, 0, 0, 0, 0, 0, 0]
