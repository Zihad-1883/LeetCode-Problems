/**
 * Problem: 217. Contains Duplicate
 * Link: https://leetcode.com/problems/contains-duplicate/
 * Time Complexity: O(n log n) - Dominated by the array sorting step.
 * Space Complexity: O(1) - Modifies the array in-place without allocating extra data structures.
 */

var containsDuplicate = function (nums) {
  // Sort numbers in ascending order so duplicate values sit right next to each other
  let sortedArray = nums.sort((a, b) => a - b);

  // Walk through the array and check adjacent elements
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      return true; // Duplicate found! Exit early
    }
  }

  // Return false only after scanning all adjacent pairs completely
  return false;
};

console.log(containsDuplicate([2, 14, 18, 22, 22])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
