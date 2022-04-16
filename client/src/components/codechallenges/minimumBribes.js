/*
It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example
q = [1, 2, 3, 5, 4, 6, 7, 8]

If person 5 bribes person 4, the queue will look like this: [1, 2, 3, 5, 4, 6, 7, 8]. Only  bribe is required. Print 1.

q = [4, 1, 2, 3]

Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

Returns:

No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.

Input Format

The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in the queue
- The second line has n space-separated integers describing the final state of the queue.

Sample Input

STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]

Sample Output
3
Too chaotic
*/

function minimumBribes(q) {
  console.log(`q=`, q);

  let bribes = 0;
  let i = 0;
  for (let p = 1; p < q.length+1; p++) {
    i = p-1;
    if(q[i] - p > 2) {
      console.log('Too chaotic');
    }
    if((q[i] - p) > 0) {
      bribes += (q[i] - p);
      console.log(`q[i] - p = bribes`, q[i], `-`, p,`=`,q[i]-p);
    } else if (q[i] > q[p]) {
      bribes++;
      console.log(`q[i] > q[p]`, q[i], `>`, q[p],`bribes = `,bribes);
    }
  }
  console.log(`bribes=`, bribes);

    let p1=1,p2=2,p3=3;
        bribes = 0;
        for(let i=0;i<q.length;i++){
            if(q[i] == p1) {
                p1 = p2;
                p2 = p3;
                p3++;
            } else if(q[i] == p2) {
                bribes++;
                p2= p3;
                p3++;
            }  else if (q[i] == p3) {
                bribes+=2;
                p3++;
            }  else {
                console.log("bribes 2 Too chaotic");
                return;
            }
        }
        console.log(`bribes 2 = `,bribes);
}


//let q = [1, 2, 5, 3, 7, 8, 6, 4];
//let q = [5, 1, 2, 3, 7, 8, 6, 4]; //tc
//let q = [1, 2, 5, 3, 7, 8, 6, 4]; // 7
//let q = [1, 2, 5, 3, 4, 7, 8, 6];  // 4
//let q = [2, 1, 5, 3, 4];  // 3
//let q = [2, 5, 1, 3, 4];  // tc
let q = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//let q = [2, 1, 5, 4, 3, 6, 9, 10, 7, 8];
//let q = [1, 2, 3, 4, 9, 5, 6, 7, 8]
console.log(`minimumBribes=`, minimumBribes(q));


    // console.log(`top i=`, i);
    // for (let j = i+1; j < q.length; j++) {
    //   console.log(`i=`, i,`qi=`, q[i],`j=`,j, `qj=`, q[j]);
    //   // if(q[i] === 1){
    //   //   i++;
    //   //   console.log(`i=`, i);
    //   //   continue;
    //   // }
    //   if (q[i] > q[j]) {
    //     if(q[i] - j > 2) {
    //       return 'Too chaotic';
    //     } else if(q[i] - j === 1 || q[i] === j){
    //         bribes++;
    //         //i++;
    //         console.log(`i=`, i, `bribes=`, bribes);
    //         break;
    //       }
    //     bribes+= Math.abs(q[i] - j);
    //     i++;
    //     console.log(`xxx i=`, i, `bribes=`, bribes);
    //     continue;
    //   }
    // }

