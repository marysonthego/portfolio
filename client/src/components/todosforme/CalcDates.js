
const aDay = 24 * 3600 * 1000;

export const CalcDates = ({
  startOrEnd,
  until,
  interval,
  every,
  daysOfWeek,
}) => {
  let dates = [];
  let untilDate = new Date(until);

  const calcIntervalDates = () => {
    switch (every) {
      case "day":
        interval = interval * aDay;
        break;
      case "week":
        interval = interval * aDay * 7;
        break;
      case "month":
        interval = interval * aDay * 30;
        break;
      case "year":
        interval = interval * aDay * 365;
        break;
      default:
        break;
    }
    calc(interval);
  };

  const calc = (interval) => {
    let nextDate = new Date(startOrEnd);
    do {
      dates.push(nextDate);
      console.log(`nextDate: `,nextDate);
      let milli = new Date(nextDate.getTime() + interval);
      nextDate = new Date(nextDate.setTime(milli.getTime()));
    } while (nextDate.getTime() < untilDate.getTime());
  };

  // const calcDaysOfWeekDates = () => {
  //   let nextDate = new Date();
  //   let daysBetween;
  //   let startDay = start.getDay();

  //   daysOfWeek.forEach((day) => {
  //     if (startDay < day) {
  //       daysBetween = day - startDay;
  //       nextDate = new Date(start.getTime() + aDay * daysBetween);
  //     } else {
  //       daysBetween = startDay - day;
  //       nextDate.setTime(start.getTime() + (aDay * (daysBetween + 7)));
  //     }
  //     dates.push(nextDate.getTime());
  //   });
  // };

  // const calcMonthDates = () => {};

  // const calcYearDates = () => {};

  if (every !== "none" && interval > 0) {
    calcIntervalDates();
  }
  // if (Array.isArray(daysOfWeek)) {
  //     calcDaysOfWeekDates();
  //   }
  return dates
   ;
};
