export const convertPennyToPounds = (val: number) => {
  const pence = String(val);

  return `£${pence.slice(0, -2)}.${pence.slice(-2)}`;
};
