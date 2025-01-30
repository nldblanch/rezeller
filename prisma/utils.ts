export const createLookup = <
  T extends Record<string, any>,
  K extends keyof T,
  V extends keyof T,
>(
  array: T[],
  key: K,
  value: V,
): Record<T[K], T[V]> => {
  return array.reduce(
    (ref, element) => {
      ref[element[key]] = element[value];
      return ref;
    },
    {} as Record<T[K], T[V]>,
  );
};

export const convertDateToTimestamp = (time: string) => {
  return new Date(time).toISOString();
};
