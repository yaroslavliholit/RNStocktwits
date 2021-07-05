interface FormatDateParams {
  date?: Date;
  extraDay?: number;
  extraMonth?: number;
}

export function getFormatDate({
  date = new Date(),
  extraDay = 0,
  extraMonth = 0,
}: FormatDateParams) {
  let month = '' + (date.getMonth() + 1 + extraMonth);
  let day = '' + (date.getDate() + extraDay);
  let year = date.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
}
