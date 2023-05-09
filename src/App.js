import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const data = [1000, 2000, 3000, 4000, 5000];


const CustomWidth = ()=> {
  const [count, setCount] = useState(30);//de customwidth start met 30 
  const [incrementing, setIncrementing] = useState(true); // er moet continue opgeteld worden deze start met 'waar' te zijn

  useEffect(() => { //Er wordt useEffect gebruikt ipv useState omdat dit alleen als reactie op gebruikt wordt en useEffect 
    const interval = setInterval(() => {
      if (count === 300) { // als count gelijk is aan 300 dan is increment niet meer waar
        setIncrementing(false);
      } else if (count === 30) {//is het precies 30 is dan is het weer wel waar 
        setIncrementing(true);
      }
      setCount((prevCount) => (incrementing ? prevCount + 1 : prevCount - 1));// als incrementing waar is dan is prevCount +1 anders is prevCount -1 
    }, 20);// iedere 0.02 sec 

    return () => clearInterval(interval); //ander blijft de interval maar door gaan, maar ik snap dit niet !!! 
  }, [count, incrementing]); //update 

  return count;
  }


//de customWidth moet een nummer worden tussen de 30 en 300 die is.
//maak een functie die een nummer maakt die start bij 30 en eindigt bij 300 en dan weer afneemt naar 300

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
      <Circle radius={CustomWidth()}/>
      <div style={{backgroundColor: "#ff43e0", width: '50px', height: '50px', borderRadius: '50%'}}></div>
    </div>
  );
}

export default App;
