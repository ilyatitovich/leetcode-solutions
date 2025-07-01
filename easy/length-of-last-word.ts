/**
 * This function returns the length of the last word in a given string `s`.
 * A word is defined as a maximal sequence of non-space characters.
 *
 * Problem:
 * - The input string may contain leading or trailing spaces.
 * - You must return the length of the last word after trimming trailing spaces.
 *
 * Solution (Reverse Scan, In-Place):
 * 1. Start scanning the string from the end.
 * 2. Skip all trailing spaces.
 * 3. Then count the characters until a space is found or the beginning of the string is reached.
 * 4. Return the count as the length of the last word.
 *
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(1), since we only use a few variables and no extra data structures.
 */

function lengthOfLastWord(s: string): number {
  let length = 0;
  let i = s.length - 1;

  // Skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count the last word's length
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
console.log(lengthOfLastWord("a ")); // Output: 1
console.log(lengthOfLastWord("   ")); // Output: 0
