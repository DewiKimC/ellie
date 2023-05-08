import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data = [1000, 2000, 3000, 4000, 5000];
const customWidth = 200;

//ik maak de cicle waarbij ik de eigenschappen in een aparte constanten zodat deze overzichtelijk zijn en makkelijk aan te passen zijn. 
const Circle = (props) => {
  const svgWidth = 1000;
  const svgHeight = 1000;
  const circleCenterX = svgWidth / 2;
  const circleCenterY = svgHeight / 2;
  const svgFill = "purple"

  return (
    <svg width={svgWidth} height={svgHeight}>
      <circle
        cx={circleCenterX}
        cy={circleCenterY}
        r={props.radius}
        fill={svgFill}
      />
    </svg>
  );
};

function App() {
  return (
    <div>
      <Circle radius={customWidth}/>
      <div style={{backgroundColor: "#ff43e0", width: '50px', height: '50px', borderRadius: '50%'}}></div>
    </div>
  );
}

export default App;
