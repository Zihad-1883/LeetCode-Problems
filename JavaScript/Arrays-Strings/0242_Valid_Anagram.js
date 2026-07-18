var isAnagram = function (s, t) {
  let check = "";
  for (let i = 0; i < t.length; i++) {
    if (!s.includes(t[i])) {
      return false;
    }
    if (check.includes(t[i])) {
      return false;
    }
    if (s.includes(t[i])) {
      check += t[i];
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
