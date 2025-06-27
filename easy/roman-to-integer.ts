/*
 * This function converts a Roman numeral string to an integer.
 *
 * Solution:
 * 1. Create a mapping of Roman numeral characters to their integer values.
 * 2. Initialize a total variable to 0 and a previous value variable to 0.
 * 3. Iterate through the string from right to left.
 * 4. For each character, get its integer value from the mapping.
 * 5. If the current value is less than the previous value, subtract it from the total.
 * 6. Otherwise, add it to the total.
 * 7. Update the previous value to the current value.
 */

function romanToInt(s: string): number {
  const romanToIntMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0,
    prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    // Get the integer value of the current Roman numeral character
    const currentValue = romanToIntMap[s[i]];

    // If the current value is less than the previous value, subtract it from the total
    // Otherwise, add it to the total
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }

    // Update the previous value to the current value
    prevValue = currentValue;
  }

  return total;
}

// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
