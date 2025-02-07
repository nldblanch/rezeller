export const formatDistanceToNow = (date_left: Date) => {
  const now = new Date();

  const yearDifference = now.getFullYear() - date_left.getFullYear();
  const monthDifference = now.getMonth() - date_left.getMonth();

  const totalMonths = yearDifference * 12 + monthDifference;

  if (totalMonths < 1) {
    return "Past month";
  } else if (totalMonths >= 1 && totalMonths < 3) {
    return "Past 3 months";
  } else if (totalMonths >= 3 && totalMonths < 6) {
    return "Past 6 months";
  } else if (totalMonths >= 6 && totalMonths < 12) {
    return "Past year";
  } else {
    return "More than a year ago";
  }
};
