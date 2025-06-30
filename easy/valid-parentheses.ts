/**
 * This function checks whether a string of brackets is valid.
 * A string is considered valid if:
 * - Every opening bracket has a corresponding closing bracket of the same type.
 * - Brackets are closed in the correct order (i.e., properly nested).
 *
 * Supported bracket pairs: (), {}, []
 *
 * Solution:
 * 1. Use a stack to track expected closing brackets.
 * 2. Iterate over each character in the string:
 *    - If it's an opening bracket, push its corresponding closing bracket onto the stack.
 *    - If it's a closing bracket:
 *        a. Check if the stack is empty — return false if it is.
 *        b. Pop from the stack and compare with the current character — return false if mismatched.
 * 3. After processing, the stack should be empty if the string is valid.
 *
 * Time Complexity: O(n), where n is the length of the input string.
 * Space Complexity: O(n), in the worst case (e.g. all opening brackets), for the stack.
 */

function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (map[char]) {
      // Opening bracket: store expected closing
      stack.push(map[char]);
    } else {
      // Closing bracket: check for match
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0; // Valid if no unmatched brackets remain
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("([{}])")); // true
