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
