import React from 'react';
import { a, b, c, origin, outerWallThickness } from './constants';

export const SvgComp = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 600 600">
      <path
        d={`M${a} ${origin} L${origin} ${origin} L ${origin} ${b} L ${c} ${b}Z`}
        stroke="blue"
        strokeWidth={outerWallThickness}
        fill="none"
        vector-effect="non-scaling-stroke"
        stroke-linecap="square"
      />
    </svg>
  );
};
