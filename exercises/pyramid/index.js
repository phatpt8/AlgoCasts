// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
  const colLen = n * 2 - 1;
  const midPoint = Math.floor(colLen / 2);

  if (n === row) return;
  if (colLen === stair.length) {
    console.log(stair);
    return pyramid(n, row + 1);
  }

  if (midPoint - row <= stair.length && midPoint + row >= stair.length) {
    stair += '#';
  } else {
    stair += ' ';
  }

  pyramid(n, row, stair);
}

module.exports = pyramid;
