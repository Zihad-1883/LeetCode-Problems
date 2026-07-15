/**
 * Problem: 35. Search Insert Position
 * Link: https://leetcode.com/problems/search-insert-position/
 * Time Complexity: O(log n) - The binary search space is halved with each iteration loop.
 * Space Complexity: O(1) - Constant space utilized exclusively for keeping pointer trackers.
 */

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1