function compareNumbers(a, b) {
  return a - b;
}

function compareReverse(a, b) {
  return b - a;
}

function FliptheMatrix(matrix) {
  let rows = matrix.length;
  let cols = Math.floor(rows / 2);
  const sumsArr = Array.from({ length: rows + 1 }, () =>
    Array.from({ length: rows }, () => Array.from({ length: rows }, () => 0))
  );

  // for ( let s =0; s< rows+1; s++) {
  //   for ( let t=0; t<rows; t++) {
  //     sumsArr.forEach((row) => {
  //       sumsArr.forEach((row) => {
  //         console.log(sumsArr[s][t])
  //       })
  //     })
  //   }
  // }

  for (let k = 0; k < rows; k++) {
    console.log(`Starting matrix:`);
    matrix.forEach((row) => {
      console.log(row);
    });

    console.log(`Flipped rows:`);
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
      console.log(`left=`,left,`right=`,right);
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
    console.log(`Starting Cols:`);
    for (let i = 0; i < rows; i++) {
      console.log(colMatrix[i]);
    }

    if (cols > 1) {
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
        }
        matrix[index] = [...row];
        console.log(`left=`,left,`right=`,right);
      });
    } else {
      let left = 0;
      let right = 0;
      colMatrix.forEach((row, index) => {
        left = row[0];
        right = row[1];
        if (left < right) {
          row.reverse();
        }
        matrix[index] = [...row];
      });
      console.log(`left=`,left,`right=`,right);

    }

    console.log(`Flipped Cols:`);
    matrix.forEach((row) => {
      console.log(row);
    });
    sumsArr[k + 1] = [...matrix];

    let sum = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        sum += matrix[i][j];
      }
    }
    console.log(`sum:`, sum);
    sumsArr[0][k] = sum;
  }
  let sumSort = [...sumsArr[0]];
  sumSort.sort(compareReverse);
  let answer = sumSort[0];

  const isBiggest = (element) => element === answer;

  let highestIndex = sumsArr[0].findIndex(isBiggest);

  console.log(`HighestIndex=`, highestIndex);
  console.log(`highest matrix:`);

  sumsArr[highestIndex + 1].forEach((sum) => {
    console.log(sum);
  });
  console.log(`sumSort: `, sumSort);
  console.log(`Answer=`, answer);

  let unique = sumSort.filter((e, i, a) => a.indexOf(e) === i)
  console.log(`unique=`, unique);

  console.log(`Iterations needed: `, unique.length);
  return answer;
}

let matrix = [
  [6,5,6,4,6,3],
  [9,2,9,2,9,2],
  [8,7,8,6,8,5],
  [9,1,9,2,9,3],
  [5,9,5,3,5,6],
  [4,3,6,9,8,1]
]

// let matrix = [
//   [  1, 12, 30, 10],
//   [  8,  3,  6,  4],
//   [ 22, 17,  1,  0],
//   [ 15, 30,  8, 23]
// ]

// let matrix = [
//   [1, 5, 9,13],
//   [2, 6,10,14],
//   [3, 7,11,15],
//   [4, 8,12,16],
// ];

// let matrix = [
//   [1, 2, 3, 4],
//   [8, 7, 6, 5],
//   [9,10,11,12],
//   [13,14,15,16],
// ];

// let matrix = [
//   [8, 10, 12, 11],
//   [2, 4, 8, 6],
//   [1, 7, 5, 3],
//   [9, 3, 5, 7],
// ];

// let matrix = [
//   [19, 11],
//   [10, 22],
// ];

FliptheMatrix(matrix);
