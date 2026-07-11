/**
 * Problem: 1. Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Time Complexity: O(n^2) - Nested loops comparing each element to every other element.
 * Space Complexity: O(1) - Constant space utilized because no extra data structures are created.
 */


var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3,3],6))
