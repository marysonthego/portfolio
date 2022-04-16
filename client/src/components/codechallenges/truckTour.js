
/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) {
    console.log(petrolpumps);
    let start = -1;
    let left = 0;

    for(let i=0; i< petrolpumps.length; i++) {
      //find start. try first one with gas - distance >= 0
      left += petrolpumps[i][0] - petrolpumps[i][1];
      if(left >= 0 && start === -1) {
        start = i;
      }
      if (left < 0) {
        left = 0;
        start = -1;
      }
    };

    for(let j=0; j< start; j++) {
      left += petrolpumps[j][0] - petrolpumps[j][1];
    }
    console.log(`start=`, start);
    return start;
}

let petrolpumps = [[2, 7], [1, 5], [10, 3], [3, 4]];
truckTour(petrolpumps);
