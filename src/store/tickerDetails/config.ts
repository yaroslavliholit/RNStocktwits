export const mapDateToRequestDaysCortege = new Map([
  [0, [-2, -3]], // sunday
  [1, [-3, -4]], // monday
  [2, [-1, -5]], // tuesday
  [3, [-1, -2]], // wednesday
  [4, [-1, -2]], // thursday
  [5, [-1, -2]], // friday
  [6, [-1, -2]], // saturday
]);

export const CURRENT_DAY = new Date().getDay();

export const DEFAULT_DAYS_TO_REQUESTS = [-1, -2];
