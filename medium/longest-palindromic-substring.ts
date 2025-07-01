/**
 * This function finds and returns the longest palindromic substring in a given string `s`.
 * A palindrome is a string that reads the same forward and backward.
 *
 * Solution (Expand Around Center):
 * 1. A palindrome mirrors around its center, so we can expand around each character (and between characters)
 *    to find all possible palindromes.
 * 2. For each index `i` in the string:
 *    - Check for the longest odd-length palindrome centered at `i`.
 *    - Check for the longest even-length palindrome centered between `i` and `i + 1`.
 * 3. During expansion, if a longer palindrome is found, update `start` and `maxLength`.
 * 4. After the loop, return the substring from `start` to `start + maxLength`.
 *
 * Time Complexity: O(n²), where n is the length of the input string.
 *   - There are O(n) centers, and each expansion takes O(n) time in the worst case.
 * Space Complexity: O(1), since no extra data structures are used apart from a few variables.
 */

function longestPalindrome(s: string): string {
  const n = s.length;
  if (n < 2) return s;

  let start = 0,
    maxLength = 1;

  // Helper function to expand around a potential palindrome center
  const expandAroundCenter = (left: number, right: number): void => {
    while (left >= 0 && right < n && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < n; i++) {
    expandAroundCenter(i, i); // Odd-length palindrome
    expandAroundCenter(i, i + 1); // Even-length palindrome
  }

  return s.substring(start, start + maxLength);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"
console.log(longestPalindrome("a")); // Output: "a"
console.log(longestPalindrome("ac")); // Output: "a" or "c"
