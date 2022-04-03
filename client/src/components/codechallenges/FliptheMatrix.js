function compareNumbers(a, b) {
  return a - b;
}

function compareReverse(a, b) {
  return b - a;
}

function FliptheMatrix(matrix) {
  let rows = matrix.length;
  let cols = Math.floor(rows / 2);
  let sumArr = Array(rows).fill(0);

  for (let k = 0; k < rows; k++) {
    console.log(`Starting matrix:`);
    matrix.forEach((row) => {
      console.log(row);
    });

    console.log(`Changed rows:`);
    // compare each row
    matrix.forEach((row) => {
      let left = 0;
      let right = 0;
      for (let j = 0; j < cols; j++) {
        left += row[j];
      }
      for (let j = cols; j < rows; j++) {
        right += row[j];
      }
      if (left < right) {
        row.reverse();
      }
      console.log(row);
    });

    //create zero-filled array of columns
    const colMatrix = Array.from({ length: rows }, () =>
      Array.from({ length: rows }, () => 0)
    );

    //populate colMatrix rows with columns from matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        colMatrix[i][j] = matrix[j][i];
      }
    }
    console.log(`colMatrix:`)
    for (let i=0; i<rows; i++) {
      console.log(colMatrix[i]);
    }

    colMatrix.forEach((row, index) => {
      let left = 0;
      let right = 0;
      for (let j = 0; j < cols; j++) {
        left += row[j];
      }
      for (let j = cols; j < rows; j++) {
        right += row[j];
      }
      if (left < right) {
        row.reverse();
        matrix[index] = row;
        }
    });
    console.log(`End matrix:`);
    matrix.forEach((row) => {
      console.log(row);
    });
    let sum = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        sum += matrix[i][j];
      }
    }
    console.log(`sum:`, sum);
    sumArr[k] = sum;
  }
  sumArr.sort(compareReverse);
  console.log(`sumArr: `, sumArr);
  console.log(`Answer=`, sumArr[0]);
  return sumArr[0];
}

let matrix = [
  [2, 4, 8, 6],
  [1, 7, 5, 3],
  [9, 3, 5, 7],
  [8, 2, 4, 6],
];

FliptheMatrix(matrix);
