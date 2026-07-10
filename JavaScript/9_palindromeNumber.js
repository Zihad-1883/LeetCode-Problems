var isPalindrome = function (x) {
  let stringifyNumber = x.toString();
  let reversedString = stringifyNumber.split("").reverse().join("");
  if (reversedString == x) {
    return true;
  } else return false;
};

console.log(isPalindrome(121));
