export const capitaliseFirstLetters = (str: string) => {
  const capitalisedStringArr = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalisedStringArr.join(" ");
};
