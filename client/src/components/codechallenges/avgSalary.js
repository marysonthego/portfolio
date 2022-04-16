// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
  if(salary.length === 1){
     return salary[0];
  }
  if(salary.length === 2) {
    return (salary[0] + salary[1])/2;
  }
  salary.sort((a,b) => {return a-b});

  if(salary.length > 2) {
    let sal = salary.slice(1, salary.length-1);
    if(sal.length > 1) {
      let sum = sal.reduce((previousValue, currentValue) => previousValue + currentValue);

      return sum/sal.length;
    } else {

      return sal[0];
    }
  }

};
// let s = [100];
// let s = [100, 200];
// let s = [100, 200, 300];
// let s = [100, 400, 200, 300];
 let s = [500, 100, 300, 200, 400];
// let s = [6000,5000,4000,3000,2000,1000];

console.log(average(s));
