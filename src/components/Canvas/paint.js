import { a, b, c, origin, feetToInches } from "../../constants";

export const paint = (canvasDom) => {
  canvasDom.width = feetToInches(50);
  canvasDom.height = feetToInches(50);
  const ctx = canvasDom.getContext("2d");
  ctx.moveTo(a, origin);
  ctx.lineTo(origin, origin);
  ctx.lineTo(origin, b);
  ctx.lineTo(c, b);

  ctx.closePath();
  ctx.stroke();
};
