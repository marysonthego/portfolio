//leetcode
// 4/6 2 mins 43 secs

var countOdds = function(low, high) {

  let count;
  if(low%2===0 && high%2===0){
      count=(high-low)/2
  }
  else{
     count=Math.floor((high-low)/2)+1;
  }

  return count

};


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var myCountOdds = function(low, high) {
  let odd =0;
  for (let i=low; i < high+1; i++) {
      if(i % 2) {
          odd++;
      }
  }
  return odd;
};

console.log(countOdds(10, 20));
console.log(countOdds(11, 21));
console.log(myCountOdds(10, 20));
console.log(myCountOdds(11, 21));
