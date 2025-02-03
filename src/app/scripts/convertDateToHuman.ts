export const convertDateToHuman = (str: string) => {
  const date = new Date(str);

  const monthRef = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const padStart = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  return `
      ${padStart(date.getDate())}
      ${monthRef[date.getMonth()]}
      ${date.getFullYear()}
      `;
};
