// Return highest sum of quadrant

function compareNumbers(a, b) {
  return a - b;
}

function compareReverse(a, b) {
  return b - a;
}

function FlipIt(matrix) {
  //rows = the size of the matrix
  let rows = matrix.length;
  //cols = the size of the quadrant
  let cols = Math.floor(rows / 2);

  //initialize a 2d array of sums where the first
  //row contains the total of each quadrant
  const sumsArr = Array.from({length: rows+1}, () =>
    Array.from({length: rows}, () =>
      Array.from({length: rows}, () => 0)));

  //iterate over each row
  for (let k = 0; k < rows; k++) {

    //if left quadrant < right, flip the row
    matrix.forEach(row => {
      let left = 0;
      let right = 0;

      for(let j = 0; j < cols; j++) {
        left += row[j];
      }

      for(let j = cols; j < rows; j++) {
        right += row[j];
      }

      if (left < right) {
        row.reverse();
      }
    });

    //initialize colMatrix, a zero-filled array of columns
    const colMatrix = Array.from({length: rows}, () =>
      Array.from({length: rows}, () => 0));

    //populate colMatrix rows with matrix columns
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < rows; j++) {
        colMatrix[i][j] = matrix[j][i];
      };
    };

    //if the quadrant size is > 1
    //if left quadrant < right, flip the colMatrix row
    if (cols > 1) {
      colMatrix.forEach((row, index) => {
        let left =0;
        let right = 0;

        for(let j = 0; j < cols; j++) {
          left += row[j];
        }
        for(let j = cols; j < rows; j++) {
          right += row[j];
        }
        if (left < right) {
          row.reverse();
        }
        matrix[index] = [...row];
      });
    } else { //if the quadrant size is 1, compare row[0] to row[1]
        colMatrix.forEach((row, index) => {
          let left = row[0];
          let right = row[1];
          if (left < right) {
            row.reverse();
          }
        matrix[index] = [...row];
        });
    };
    //sumsArr holds each matrix after flips
    sumsArr[k + 1] = [...matrix];

    let sum = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < cols; j++) {
        sum += matrix[i][j];
      };
    };
    //first row of sumsArr contains quadrant totals
    sumsArr[0][k] = sum;
  } //k end for each row

  //reverse sort sumsArr[0] to find highest total
  let sumSort = [...sumsArr[0]];
  sumSort.sort(compareReverse);

  let answer = sumSort[0];
  console.log(`Answer: `, answer);
  return answer;
};


function FliptheMatrix(matrix) {
  let rows = matrix.length;
  let cols = Math.floor(rows / 2);

  const sumsArr = Array.from({ length: rows + 1 }, () =>
    Array.from({ length: rows }, () => Array.from({ length: rows }, () => 0))
  );


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
      //console.log(`left=`,left,`right=`,right);
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
        //console.log(`left=`,left,`right=`,right);
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

function SO(matrix) {
let sum = 0;

    //Divide size by 2 to get quadrant size
    let quad = matrix.length/2;

    matrix.forEach((row) => {
      console.log(row);
    });

    //Now for each cell in the upper quadrant, get the max value that could be flipped into that cell
    //
    //Iterate all rows in quadrant
    for(let r = 0; r < quad; r++)
    {
      //Iterate all columns in quadrant
      for(let c = 0; c < quad; c++)
      {
          //Grab the 4 possible values that could wind up in this location of the upper quadrant
            let p1 = matrix[r][(2 * quad - c - 1)];
            let p2 = matrix[r][c];
            let p3 = matrix[2 * quad - r - 1][c];
            let p4 = matrix[2 * quad - r - 1][2 * quad - c - 1];

            console.log(`\nr`,r,`c`,c);
            console.log(`p1 flip row`,r, `[`,r,`,`,c,`] = `,p1);
            matrix[r].reverse();
            matrix.forEach((row) => {
              console.log(row);
            });

            console.log(`\np2 no change row`,r, `[`,r,`,`,c,`] = `,p2);

            console.log(`\np3 flip column`,c,`[`,r,',',c,`] = `, p3);
            if( r === 0) {
              let column = Array.from({length: matrix.length} = () => 0);
              for( let i=0; i<matrix.length; i++) {
                column[i] = matrix[2*quad -i -1][c];
              }
              for (let i=matrix.length, j=0; i<-1, j<matrix.length; i--, j++) {
                matrix[j][c] = matrix[i][c];
              }
            // matrix[r][c] = matrix[2*quad -1][c];
            // matrix[r+1][c] = matrix[2*quad  -2][c];
            // matrix[r+2][c] = matrix[2*quad  -3][c];
            // matrix[r+3][c] = matrix[2*quad  -4][c];
           }   //else if (r === 1) {
            //   matrix[r-1][c] = matrix[2*quad -1][c];
            //   matrix [r][c] = matrix[2*quad -2][c];
            //   matrix [r+1][c] = matrix[2*quad -3][c];
            //   matrix [r+2][c] = matrix[2*quad -4][c];
            // }
            matrix.forEach((row) => {
              console.log(row);
            });

            console.log(`\np4 flip row `,r, `and column`,c, p4);


            //Get the highest value possible in this cell
            sum += Math.max(p1, Math.max(p2, Math.max(p3, p4)));
      }
    }
    console.log(`sum`, sum);
    return sum;
  }

  function original(matrix) {
    let sum = 0;

    //Divide size by 2 to get quadrant size
    let quad = matrix.length/2;
    let mtxSize = matrix.length;


    //Now for each cell in the upper quadrant, get the max value that could be flipped into that cell
    //
    //Iterate all rows in quadrant
    for(let r = 0; r < quad; r++)
    {
      //Iterate all columns in quadrant
      for(let c = 0; c < quad; c++)
      {
          //Grab the 4 possible values that could wind up in this location of the upper quadrant
            let p1 = matrix[r][(mtxSize - c - 1)];
            let p2 = matrix[r][c];
            let p3 = matrix[(mtxSize - r - 1)][c];
            let p4 = matrix[(mtxSize - r - 1)][(mtxSize - c - 1)];

            //Get the highest value possible in this cell
            sum += Math.max(p1, Math.max(p2, Math.max(p3, p4)));
      }
    }
    console.log(`sum`, sum);
    return sum;
  }

// let matrix = [
//   [6,5,6,4,6,3],
//   [9,2,9,2,9,2],
//   [8,7,8,6,8,5],
//   [9,1,9,2,9,3],
//   [5,9,5,3,5,6],
//   [4,3,6,9,8,1]
// ]

let matrix = [
[112, 42, 83, 119], //f 119, 83, 42, 112
[56, 125, 56, 49],  //  56, 125, 56, 49
[15, 78, 101, 43],  //f 43, 101, 78, 15
[62, 98, 114, 108]  //f 108, 114, 98, 62
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

//FlipIt(matrix);
//FliptheMatrix(matrix);
//SO(matrix);
original(matrix);
