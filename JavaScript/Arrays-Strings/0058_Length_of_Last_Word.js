/**
 * Problem: 58. Length of Last Word
 * Link: https://leetcode.com/problems/length-of-last-word/
 * Time Complexity: O(n) - In the worst case, we scan the entire string once.
 *                  Average case is much faster because we return early after the last word.
 * Space Complexity: O(1) - Only a single counter variable is used, modifying nothing else in memory.
 */

var lengthOfLastWord = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0 && s[i] === " ") {
      return count;
    }
  }

  return count;
};

console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
