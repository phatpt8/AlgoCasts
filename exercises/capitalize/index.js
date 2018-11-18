// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const len = str.length;
  let i = 1;
  let prev = str[0].toUpperCase();
  let newStr = prev;

  while (i < len) {
    newStr += prev === ' ' ? str[i].toUpperCase() : str[i];
    prev = str[i];
    i++;
  }

  return newStr;
}

// function capitalize(str) {
//   const words = [];
//   for (const word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }

module.exports = capitalize;
