export const feetToInches = (feets, inches = 0) => {
  return feets * 12 + inches;
};

export const a = feetToInches(48, 8);
export const b = feetToInches(34, 7);
export const c = feetToInches(45, 11);
export const d = feetToInches(34, 9);

export const origin = 1;
export const outerWallThickness = feetToInches(1);
