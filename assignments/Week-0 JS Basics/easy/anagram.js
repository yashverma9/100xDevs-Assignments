/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let countChars = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] in countChars) countChars[str1[i]] += 1;
    else countChars[str1[i]] = 1;
    if (str2[i] in countChars) countChars[str2[i]] -= 1;
    else countChars[str2[i]] = -1;
  }
  for (key in countChars) {
    if (countChars[key] !== 0) return false;
  }
  return true;
}

module.exports = isAnagram;
