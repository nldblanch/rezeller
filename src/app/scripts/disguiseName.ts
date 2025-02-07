export const disguiseName = (username: string) => {
  return username.charAt(0) + "***" + username.charAt(username.length - 1);
};
