/**
 * This function implements a simple substring search, returning the index of the first occurrence
 * of the substring `needle` in the string `haystack`, or -1 if `needle` is not found.
 *
 * Problem:
 * - Given two strings, `haystack` and `needle`, return the index of the first occurrence of `needle` in `haystack`.
 * - If `needle` is not part of `haystack`, return -1.
 * - If `needle` is an empty string, return 0 (per problem definition).
 *
 * Solution:
 * 1. Loop through all valid starting positions in `haystack` where `needle` could fit.
 * 2. At each position `i`, check character by character whether `needle` matches `haystack` starting at `i`.
 * 3. If a mismatch is found, break early and continue with the next position.
 * 4. If all characters match, return the starting index `i`.
 * 5. If no match is found after the loop, return -1.
 *
 * Time Complexity: O(n * m), where:
 *   - n = length of `haystack`
 *   - m = length of `needle`
 * Space Complexity: O(1), since only constant extra space is used.
 */

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }
  return -1;
}

// Example usage:
const haystack = "hello";
const needle = "ll";
const index = strStr(haystack, needle);
console.log(index); // Output: 2
