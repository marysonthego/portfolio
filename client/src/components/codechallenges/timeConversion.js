//Convert from am/pm to military time
function timeConversion(s) {
  let hours = s.substring(0, 2);
  let minutes = s.substring(3, 5);
  let seconds = s.substring(6, 8);
  let modifier = s.substring(8);

  if(parseInt(hours, 10) !== NaN) {
    if (hours === '12') {
        hours = '00';
    }
  modifier.toUpperCase();
  if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
  }
  let result = (`${hours}:${minutes}:${seconds}`);
  console.log(result);
  return result;
  }
}

timeConversion("12:20:35pm");
timeConversion("08:15:02pm");
timeConversion("08:15:02am");
timeConversion("hh:15:02pm");
