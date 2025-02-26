import {  feetToInches } from "../../constants";
import { createOutline, createInline } from "./utils";

export const paint = (canvasDom) => {
  canvasDom.width = feetToInches(50);
  canvasDom.height = feetToInches(50);
  const ctx = canvasDom.getContext("2d");
  
  createOutline(ctx);
  createInline(ctx);
};
