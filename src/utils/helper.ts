import { Options } from "interfaces";

export const removeUndefined = (o: Options) =>
  Object.entries(o)
    .filter(([, val]) => val !== false)
    .reduce((result, [key, val]) => {
      (result as any)[key] = val;
      return result;
    }, {});
