// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const arr = Array.from({ length: n }, () => new Array());
  let val = 1;
  let startRow = startCol = 0;
  let endRow = endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {

    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = val;
      val++
    }
    startRow++;
    
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = val;
      val++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = val;
      val++;
    }
    endRow--;

    for (let i = endRow; i >= startRow;i--) {
      arr[i][startCol] = val;
      val++;
    }
    startCol++;
  }

  return arr;
}

// function matrix(n) {
//   const maze = Array.from({ length: n }, () => new Array());
//   let num = 1;
//   let startRow = startCol = 0;
//   let endRow = endCol = n - 1;

//   while (startRow <= endRow && startCol <= endCol) {
    
//     for (let i = startCol; i <= endCol; i++) {
//       maze[startRow][i] = num;
//       num++;
//     }
//     startRow++;

//     for (let i = startRow; i <= endRow; i++) {
//       maze[i][endCol] = num;
//       num++;
//     }
//     endCol--;

//     for (let i = endCol; i >= startCol; i--) {
//       maze[endRow][i] = num;
//       num++;
//     }
//     endRow--;

//     for (let i = endRow; i >= startRow; i--) {
//       maze[i][startCol] = num;
//       num++;
//     }
//     startCol++;
//   }

//   return maze;
// }

module.exports = matrix;
