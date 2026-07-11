/**
 * Problem: 13. Roman to Integer
 * Link: https://leetcode.com/problems/roman-to-integer/
 * Time Complexity: O(n) - Single pass loop iterating through the length of the string.
 * Space Complexity: O(1) - The map containing Roman numeral conversions is fixed in size (7 elements) and does not grow with the input.
 */


var romanToInt = function (s) {
  let output = 0;
  const numericValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = numericValues[s[i]];
    let next = numericValues[s[i + 1]];

    if (current >= next || next === undefined) {
      output += current;
    } else {
      output -= current;
    }
  }

  return output;
};

console.log(romanToInt("MCMXCIV"));

// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

//   const numericValues = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
