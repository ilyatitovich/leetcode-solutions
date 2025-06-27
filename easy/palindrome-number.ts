/**
 * This function checks if a given number is a palindrome.
 * A palindrome is a number that reads the same backward as forward.
 *
 * Solution:
 * 1. Convert the number to a string.
 * 2. Reverse the string and compare it with the original string.
 * 3. If they are the same, return true; otherwise, return false.
 */

function isPalindrome(x: number): boolean {
  const strNum = x.toString();
  return strNum === strNum.split("").reverse().join(""); // Short and simple palindrome check
}

// Example usage:
const number = 121;
const result = isPalindrome(number);
console.log(result); // Output: true

const nonPalindromeNumber = -121;
const nonPalindromeResult = isPalindrome(nonPalindromeNumber);
console.log(nonPalindromeResult); // Output: false
