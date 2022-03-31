function timeConversion(s) {
  // Write your code here
  let hours = s.substring(0, 2);
  let minutes = s.substring(3, 5);
  let seconds = s.substring(6, 8);
  let modifier = s.substring(8);
  if (hours === '12') {
      hours = '00';
  }
  if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
  }
  let result = (`${hours}:${minutes}:${seconds}`);
  return result;

}
