/**
 * This function performs Zigzag Conversion on a string `s` given a number of rows `numRows`.
 *
 * Problem:
 * - Write the characters of the string in a zigzag pattern across `numRows`.
 * - Then read the characters row by row to construct the converted string.
 *
 * Solution (Simulation of Zigzag Traversal):
 * 1. Create an array of strings (one per row) to simulate the zigzag layout.
 * 2. Use a pointer `currentRow` to track which row to write to.
 * 3. Use a flag `goingDown` to track the direction of traversal.
 *    - Move down when goingDown is true, up when false.
 *    - Reverse direction when reaching the top or bottom row.
 * 4. Append each character in the input string to the appropriate row.
 * 5. Join all row strings to produce the final result.
 *
 * Time Complexity: O(n), where n is the length of the input string.
 * Space Complexity: O(n), for the row buffers used to build the result.
 */

function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows: string[] = new Array(numRows).fill("");

  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;

    // Change direction at top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1)); // Output: "A"
console.log(convert("AB", 1)); // Output: "AB"
console.log(convert("ABCD", 2)); // Output: "ACBD"
