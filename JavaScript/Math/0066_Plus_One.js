/**
 * Problem: 66. Plus One
 * Link: https://leetcode.com/problems/plus-one/
 * Time Complexity: O(n) - In the worst case (like [9,9,9]), we iterate through the entire array once.
 * Average case is O(1) when the last digit is less than 9.
 * Space Complexity: O(1) - The modifications are done completely in-place. Even when unshift(1) is called, the space scales only by a single constant element.
 */

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9, 9])); // Output: [1, 0, 0]

/**
 * New concepts :
 *  Recognizing Numerical Constraints & Precision Limits
 *  Backward Array Traversal
 *  Managing State Cascades & Early Returns
 */
