/**
 * Problem: 9. Palindrome Number
 * Link: https://leetcode.com/problems/palindrome-number/
 * Time Complexity: O(n) - Converting the number to a string and reversing its characters takes linear time relative to the number of digits.
 * Space Complexity: O(n) - Storing the stringified and reversed representations in memory.
 */


var isPalindrome = function (x) {
  let stringifyNumber = x.toString();
  let reversedString = stringifyNumber.split("").reverse().join("");
  if (reversedString == x) {
    return true;
  } else return false;
};

console.log(isPalindrome(121));
