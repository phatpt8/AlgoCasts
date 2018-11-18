// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunkIndex = 0;
//   let eachSize = 0;
//   return array.reduce((acc, number) => {
//     if (!acc[chunkIndex]) {
//       acc[chunkIndex] = [number];
//     } else {
//       acc[chunkIndex].push(number);
//     }

//     if (eachSize === size - 1) {
//       eachSize = 0;
//       chunkIndex++;
//     } else {
//       eachSize++;
//     }
    
//     return acc;
//   }, []);
// }

function chunk(arr, size) {
  const chunk = [];
  const len = arr.length;
  let i = 0;

  while (i < len) {
    chunk.push(arr.slice(i, i + size));
    i += size;
  }

  return chunk
}

module.exports = chunk;
