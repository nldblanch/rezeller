export const convertCategory = (str: string) => {
  const stringArr = str.split("_").map((word) => {
    if (word.length === 0) return "";
    else {
      return word === "and"
        ? "and"
        : word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  return stringArr.join(" ");
};
