/**
 * Problem: 1331. Rank Transform of an Array
 * Link: https://leetcode.com/problems/rank-transform-of-an-array/
 * Time Complexity: O(n log n) - Dominated by the sorting step (...arr.sort).
 *                  The subsequent mapping and transformation loops run in O(n) linear time.
 * Space Complexity: O(n) - Auxiliary space used to store the cloned array (sortedArray),
 *                   the rank lookup map (rankMap), and the final result array (output).
 */

var arrayRankTransform = function (arr) {
  let sortedArray = [...arr].sort((a, b) => a - b);
  let rankMap = {};
  let output = [];
  let rank = 1;
  for (let i = 0; i < sortedArray.length; i++) {
    if (rankMap[sortedArray[i]] === undefined) {
      rankMap[sortedArray[i]] = rank;
      rank++;
    }
  }
  //   console.log(rankMap);
  //   console.log(rank);
  for (let i = 0; i < arr.length; i++) {
    output.push(rankMap[arr[i]]);
  }
  return output;
};

console.log(arrayRankTransform([10, 10, 10]));

/**
 * New concept :
 *  Array Mutation Safeguards ([...arr])
 *  Deduplication Logic via Map Verification
 *  Replacing Nested Loops with Map Transformations
 *
 *
 */
