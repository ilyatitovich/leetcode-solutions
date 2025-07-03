/**
 * This function takes two binary strings `a` and `b`, and returns their sum as a binary string.
 *
 * Problem:
 * - Given two binary strings, return their sum as a binary string.
 * - The strings contain only '0' or '1' characters and are non-empty.
 *
 * Solution (Simulate Binary Addition):
 * 1. Initialize a `carry` variable to hold the carry-over during addition.
 * 2. Use two pointers `i` and `j` to iterate over `a` and `b` from the end (least significant digit).
 * 3. Loop while either string has digits left or there is a remaining carry:
 *    - Convert the characters to integers (using `parseInt`) and add them along with the `carry`.
 *    - Append the result of `sum % 2` to the front of the result string (since binary digits are 0 or 1).
 *    - Update the `carry` to `Math.floor(sum / 2)` (either 0 or 1).
 * 4. Return the final binary result string.
 *
 * Time Complexity: O(max(n, m)), where n and m are the lengths of `a` and `b`.
 * Space Complexity: O(max(n, m)), for the result string.
 */

function addBinary(a: string, b: string): string {
  let carry = 0; // Initialize carry to 0
  let result = ""; // Initialize result as an empty string
  let i = a.length - 1; // Start from the end of string a
  let j = b.length - 1; // Start from the end of string b

  while (i >= 0 || j >= 0 || carry > 0) {
    const sum =
      (i >= 0 ? parseInt(a[i--], 10) : 0) +
      (j >= 0 ? parseInt(b[j--], 10) : 0) +
      carry; // Calculate the sum of the current digits and carry

    result = (sum % 2).toString() + result; // Append the binary digit to the result
    carry = Math.floor(sum / 2); // Update carry
  }

  return result;
}

// Example usage:
console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(addBinary("0", "0")); // Output: "0"
console.log(addBinary("111", "111")); // Output: "1110"
