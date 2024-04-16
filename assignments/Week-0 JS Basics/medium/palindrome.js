/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphanumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

function isPalindrome(str) {
  str = str.toLowerCase();
  // for (let i = 0; i < str.length; i++) {
  //   if (!isAlphanumeric(str[i])) str = str.slice(0, i) + " " + str.slice(i + 1);
  // }
  // str = str.replaceAll(" ", "");
  let n = 0;
  while (n < str.length) {
    if (!isAlphanumeric(str[n])) {
      str = str.slice(0, n) + str.slice(n + 1);
    } else n += 1;
  }
  let start = 0;
  let end = str.length - 1;
  while (start < str.length / 2 && end > str.length / 2) {
    if (str[start] !== str[end]) return false;
    start += 1;
    end -= 1;
  }
  return true;
}

module.exports = isPalindrome;
