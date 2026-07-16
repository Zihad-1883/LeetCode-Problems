var addBinary = function (a, b) {
  let longerString = "";
  if (a > b) {
    longerString = a;
  } else {
    longerString = b;
  }

  let firstStringOnesIndex = a.length - 1;
  let secondStringOnesIndex = b.length - 1;
  let firstStringPointer = a[firstStringOnesIndex];
  let secondStringPointer = b[secondStringOnesIndex];
  let carry = 0;
  let sum = "";
  for (let i = 0; i < longerString.length; i++) {
    if (firstStringPointer + secondStringPointer === "2") {
      carry++;
      sum += "0";
    } else if (firstStringPointer + secondStringPointer === "3") {
      carry++;
      sum += "1";
    } else {
      sum = firstStringPointer + secondStringPointer;
    }
  }
  console.log(carry, sum);
};

addBinary("11", "1");
