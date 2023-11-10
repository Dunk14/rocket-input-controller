export enum Color {
  White = "white",
  Black = "black",
}

export function isColor(value: string) {
  return Object.values(Color).reduce<{ [prop: string]: boolean }>(
    (acc, prop) => {
      acc[prop] = prop === value;
      return acc;
    },
    {},
  );
}
