/**
 * This function returns the number of distinct ways to climb to the top of a staircase with `n` steps.
 * You can climb either 1 or 2 steps at a time.
 *
 * Problem:
 * - At each step, you can choose to climb either 1 or 2 steps.
 * - Given `n`, compute how many distinct ways you can reach the top.
 *
 * Insight:
 * - This is a classic dynamic programming (DP) problem similar to computing the n-th Fibonacci number.
 * - Ways to reach step `n` = ways to reach `n - 1` + ways to reach `n - 2`.
 *
 * Solution (Iterative DP with Constant Space):
 * 1. Handle base cases: `n = 1` → 1 way, `n = 2` → 2 ways.
 * 2. Initialize two variables: `first` (ways to reach step `n - 2`) and `second` (ways to reach step `n - 1`).
 * 3. Loop from 3 to `n`, updating the number of ways at each step.
 * 4. Return the final count.
 *
 * Time Complexity: O(n), since we loop through each step once.
 * Space Complexity: O(1), using only constant space.
 */

function climbStairs(n: number): number {
  if (n <= 2) return n; // Base cases: 1 way for 1 step, 2 ways for 2 steps

  let first = 1,
    second = 2,
    current = 0;

  for (let i = 3; i <= n; i++) {
    current = first + second; // Sum of ways to reach the previous two steps
    first = second; // Move forward in the sequence
    second = current;
  }

  return current; // Total number of ways to reach step n
}
// Example usage:
console.log(climbStairs(5)); // Output: 8
console.log(climbStairs(10)); // Output: 89
console.log(climbStairs(1)); // Output: 1
