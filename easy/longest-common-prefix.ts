/* This function finds the longest common prefix among an array of strings.
 *
 * Solution:
 * 1. If the input array is empty, return an empty string.
 * 2. Initialize an empty string `prefix` to hold the common prefix.
 * 3. Iterate character by character over the first string.
 * 4. For each character, compare it with the corresponding character in all other strings.
 * 5. If a mismatch is found or the end of any string is reached, return the current `prefix`.
 *
 * This is a vertical scanning approach — characters are compared column by column.
 *
 * Time Complexity: O(n * m), where n is the number of strings and m is the length of the shortest string.
 * Space Complexity: O(m), since the prefix can grow up to the length of the shortest string.
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = "";

  for (let char of strs[0]) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][prefix.length] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
