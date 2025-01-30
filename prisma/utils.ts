export const createRef = <T, K extends keyof T, V extends keyof T>(
    array: Array<T>,
    key: K,
    value: V
  ): Record<string | number | symbol, T[V]> => {
    return array.reduce((ref, element) => {
      ref[element[key] as string | number | symbol] = element[value];
      return ref;
    }, {} as Record<string | number | symbol, T[V]>);
  };