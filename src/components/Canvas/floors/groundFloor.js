import { outerSpace, b, c, origin, carSpace } from "../../../constants";

export const groundFloor = (ctx) => {
    ctx.beginPath();
    
    ctx.moveTo(c-carSpace, origin+outerSpace);
  ctx.lineTo(origin+outerSpace, origin+outerSpace);
  ctx.lineTo(origin+outerSpace, b-outerSpace);
  ctx.lineTo(c-carSpace, b-outerSpace);

  ctx.closePath();
  ctx.stroke();
  ctx.strokeStyle = 'black';
//   ctx.fillStyle = 'red';
  ctx.fill();
}