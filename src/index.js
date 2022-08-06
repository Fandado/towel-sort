module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix === undefined || matrix.length === 0) {
    return [];
   };
  for (let i = 0; i < matrix.length; i++) {
    if(i % 2 !== 0) { // index is even
      array = array.concat(matrix[i].reverse());
    } else {
      array = array.concat(matrix[i]);
    }
  }
  console.log(array);
  return array;
}
