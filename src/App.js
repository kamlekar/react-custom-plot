import React from 'react';
import './style.css';
import { SvgComp } from './Svg';
import {CanvasComp} from './components/Canvas';

export default function App() {
  return (
    <div>
      {/* <SvgComp /> */}
      <CanvasComp />
    </div>
  );
}
