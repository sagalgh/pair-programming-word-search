const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0;  i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      newArray[c][r] = matrix[r][c];
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};
//wordSearch ("entire array", "frank")
  


module.exports = wordSearch;