var deleteDuplicates = function (head) {
  let output = [];
  for (let i = 0; i < head.length; i++) {
    if (!output.includes(head[i])) {
      output.push(head[i]);
    }
  }
  return output;
};

console.log(deleteDuplicates([1, 1, 2, 3, 3]));
