/**
 * Problem: 14. Longest Common Prefix
 * Link: https://leetcode.com/problems/longest-common-prefix/
 * Time Complexity: O(S) - Where S is the sum of all characters in all strings. In the worst case, it scans all characters.
 * Space Complexity: O(1) - Constant space used as the prefix variable updates in-place without auxiliary structures.
 */


var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));



/*
New concept : substring
*/