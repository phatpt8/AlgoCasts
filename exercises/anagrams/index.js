// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const decor = str => str.replace(/[^\w]/, '').toLowerCase();
//   const a = decor(stringA);
//   const b = decor(stringB);
//   const aLen = a.length;
//   const bLen = b.length;

//   if (aLen !== bLen) return false;

//   const toCharMap = str => {
//     const charMap = {};

//     for (const char of str) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }
//   const aCharMap = toCharMap(a);
//   const bCharMap = toCharMap(b);
  
//   for (const i in aCharMap) {
//     if (aCharMap[i] !== bCharMap[i]) return false;
//   }
  
//   return true;
// }

function anagrams(stringA, stringB) {
  const decor = str => str.replace(/[^\w]/, '').toLowerCase().split('').sort('').join('');
  return decor(stringA) === decor(stringB);
}

module.exports = anagrams;
