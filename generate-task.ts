/* 
A script to generate a LeetCode problem template file.
This script takes a problem slug and difficulty level as command line arguments,
and creates a TypeScript file with a template for the problem solution.
*/

import * as fs from "fs";
import * as path from "path";

const [, , slug, difficulty] = process.argv;

if (!slug || !difficulty) {
  console.error("Usage: ts-node generate-task.ts <problem-slug> <difficulty>");
  process.exit(1);
}

const problemName = slug
  .split("-")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");

const filename = `${slug}.ts`;
const url = `https://leetcode.com/problems/${slug}/`;

const template = `/**
 * LeetCode Problem: ${problemName}
 * Difficulty: ${difficulty}
 * 
 * Problem URL: ${url}
 * 
 * Description: (Add problem description here)
 * 
 * Example:
 * Input: ...
 * Output: ...
 * 
 * Constraints:
 * - ...
 */

function ${slug.replace(/-/g, "")}(/* params */) {
  // Your solution here
}

export default ${slug.replace(/-/g, "")};
`;

fs.writeFileSync(path.join(process.cwd(), filename), template);

console.log(`Generated ${filename} for problem: ${problemName}`);
