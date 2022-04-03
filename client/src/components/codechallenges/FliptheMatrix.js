
function compareNumbers(a, b) {
  return a - b;
}

function compareReverse(a, b) {
  return b - a;
}

function FliptheMatrix(matrix) {
  console.log(`Original matrix:`);
  matrix.forEach(row => {
    console.log(row);
  });

  let rows = matrix.length;
  let cols = Math.floor(rows/2);

  console.log(`Changed rows:`);
  // compare each row
  matrix.forEach((row) => {
    let left = 0;
    let right = 0;
    for(let j=0; j<cols; j++) {
      left += row[j];
    }
    for (let j=cols; j<rows; j++) {
      right += row[j];
    }
    if(left < right) {
      row.reverse();
    }
    console.log(row);
  });

  //create zero-filled array of columns
  const colMatrix = Array.from({ length: cols }, () =>
  Array.from({ length: rows }, () => 0)
  );

  //populate colMatrix rows with columns from matrix
  //number of rows = matrix rows.length/2
  //console.log(`Starting colMatrix:`);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<matrix.length; j++) {
      colMatrix[i][j] = matrix[j][i];
    }
    //console.log(colMatrix[i]);
  }
  //console.log(`Ending colMatrix:`);
  colMatrix.forEach((row, index) => {
    let left = 0;
    let right = 0;
    for(let j=0; j<cols; j++) {
      left += row[j];
    }
    for (let j=cols; j<rows; j++) {
      right += row[j];
    }
    if(left < right) {
      row.reverse();
      //console.log(`Starting colMatrix:`);
      for (let i=0; i<cols; i++) {
        for (let j=0; j<matrix.length; j++) {
          matrix[j][i] = colMatrix[i][j];
        }
      }
    }
      // for(let j=0; j<rows; j++)
      // if(row[0] < row[j]) {
      //   row.reverse();
      // }
    //console.log(row);
  });
  console.log(`Final matrix:`);
  matrix.forEach(row => {
    console.log(row);
  });
  let sum = 0;
  for (let i=0; i< cols; i++) {
    for (let j=0; j<cols; j++) {
      sum += matrix[i][j];
    }
    console.log(`sum:`, sum);
    return sum;
  }
}

let matrix = [
  [2, 4, 8, 6],
  [1, 7, 5, 3],
  [9, 3, 5, 7],
  [8, 2, 4, 6]
];

FliptheMatrix(matrix);
