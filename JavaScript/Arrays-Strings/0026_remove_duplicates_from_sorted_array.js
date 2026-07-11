/**
 * Problem: 26. Remove Duplicates from Sorted Array
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Time Complexity: O(n) - Single pass through the array where 'n' is the length of nums.
 * Space Complexity: O(1) - Constant space used because the array is modified in-place with no extra allocations.
 */


var removeDuplicates = function (nums) {
  let i = 0;
  for (j = i + 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
}
return i+1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
