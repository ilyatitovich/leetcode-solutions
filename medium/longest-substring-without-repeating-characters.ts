/**
 * This function returns the length of the longest substring without repeating characters.
 *
 * Solution (Sliding Window + Hash Map):
 * 1. Use a sliding window defined by two pointers: `start` (left) and `end` (right).
 * 2. Use a `Map` to store the most recent index of each character.
 * 3. For each character at index `end`:
 *    - If it's already in the map and its last seen index is >= `start`, move `start` to `lastIndex + 1`.
 *    - Update the map with the current index of the character.
 *    - Update `maxLength` with the length of the current window (`end - start + 1`).
 *
 * Time Complexity: O(n), where n is the length of the string.
 *   - Each character is visited at most twice (once by `end`, once by `start`).
 * Space Complexity: O(k), where k is the size of the character set (e.g., 26 for lowercase, 128 for ASCII).
 */

function lengthOfLongestSubstring(s: string): number {
  const charIndexMap: Map<string, number> = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    // If character already seen, move the start pointer
    if (charIndexMap.has(currentChar)) {
      start = Math.max(start, charIndexMap.get(currentChar)! + 1);
    }

    // Update the character's latest index
    charIndexMap.set(currentChar, end);

    // Update the max length of current valid substring
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("")); // Output: 0 (empty string)
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3 ("vdf")
console.log(lengthOfLongestSubstring("anviaj")); // Output: 5 ("nviaj")
