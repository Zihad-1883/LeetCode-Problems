/**
 * Problem: 1979. Find Greatest Common Divisor of Array
 * Link: https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * Time Complexity: O(n + minVal) - O(n) to find the min and max elements,
 *                  plus up to O(minVal) steps to find the common divisor.
 * Space Complexity: O(1) - Uses a fixed set of tracking variables without allocating extra array space.
 */

var findGCD = function (nums) {
  let mn = nums[0];
  let mx = nums[0];

  // 1. Find the absolute minimum and maximum values in a single pass
  for (let i = 1; i < nums.length; i++) {
    if (mn > nums[i]) {
      mn = nums[i];
    }
    if (mx < nums[i]) {
      mx = nums[i];
    }
  }

  // 2. Count down from the minimum value to find the largest common factor
  for (let i = mn; i > 0; i--) {
    if (mx % i === 0 && mn % i === 0) {
      return i; // The first matching divisor encountered is guaranteed to be the GCD
    }
  }
};

console.log(findGCD([2, 5, 6, 9, 10])); // Output: 2
console.log(findGCD([7, 5, 6, 8, 3])); // Output: 1
console.log(findGCD([3, 3]));  // Output: 3
