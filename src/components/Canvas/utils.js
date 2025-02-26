import { a, b, c, origin } from "../../constants";

export const createOutline = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(a, origin);
  ctx.lineTo(origin, origin);
  ctx.lineTo(origin, b);
  ctx.lineTo(c, b);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

export const createInline = (ctx) => {
    ctx.beginPath();
    
    ctx.moveTo(a-12, origin+12);
  ctx.lineTo(origin+12, origin+12);
  ctx.lineTo(origin+12, b-12);
  ctx.lineTo(c-12, b-12);

  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = 'white';
  ctx.fill();
}