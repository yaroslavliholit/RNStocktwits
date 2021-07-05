export const isPositiveNumber = (value: number) =>
  Math.sign(value || -1) !== -1;
