
import './App.css';
import React, {useState} from 'react';

function App() {
  const [display, setDisplay] = useState(0);
  const [computation, setComputation] = useState([]);
  const[operator, setOperator] = useState(null);
  const [tracker, setTracker] = useState(0);
  const[num1,setNum1] = useState(0);
  const[num2,setNum2] = useState(0);



  function sign (e){
    setOperator(e.target.value)
    console.log(e.target.value);
  }

  function clear(){
    setDisplay(0)
  }
  function compute(){
    setTracker(0);
    // const prev = (setDisplay(prevDisplay => {
    //   return prevDisplay;
    // }))
    // console.log(prev)
    if (operator === "division"){
      const computed = num1/num2;
      console.log(num1 + " " + num2)
      console.log(computed)
       setDisplay( computed)
    }
    if(operator === "multiplication"){
      const computed = num1*num2;
      console.log(num1 + " " + num2)

      console.log(computed)
      setDisplay( computed)
    }
    if (operator === "addition"){
      const computed = parseInt(num1 )+ parseInt(num2);
      console.log(num1 + " " + num2)

      console.log(computed)
      setDisplay( computed)
    }
    if (operator === "subtraction"){
      console.log(num1 + " " + num2)

      const computed = num1 - num2;
      console.log(computed)
      setDisplay( computed)
    }
  }

  function number (e) {
    const num = e.target.value;
    console.log(num);
    setDisplay(num);
    setTracker(prevTracker => prevTracker + 1)
    console.log("Tracker" + tracker);
    if (tracker > 0){
      setNum2(num);
    }
    else{
      setNum1(num);
    }
  }
  return (


    <div className="App">
      <p className="intro"> This is my calculator </p>
      <div className={"note"}><p> It only computes one digit positive entries. </p></div>
        <div className="container">
          <label className=" item0" type="text">{display}</label>
          <button className="grid-item item1" onClick={clear}>Clear</button>
          <button className="grid-item item2" value="division" onClick={sign}>/</button>
          <button className="grid-item item3" value="1" onClick={number}>1</button>
          <button className="grid-item item4" value="2" onClick={number}>2</button>
          <button className="grid-item item5" value="3" onClick={number}>3</button>
          <button className="grid-item item6" value="multiplication" onClick={sign}>x</button>
          <button className="grid-item item7" value="4" onClick={number}>4</button>
          <button className="grid-item item8" value="5" onClick={number}>5</button>
          <button className="grid-item item9" value="6" onClick={number}>6</button>
          <button className="grid-item item10" value="addition" onClick={sign}>+ </button>
          <button className="grid-item item11" value="7" onClick={number} >7</button>
          <button className="grid-item item12" value="8" onClick={number}>8</button>
          <button className="grid-item item13" value="9" onClick={number}>9</button>
          <button className="grid-item item14" value="subtraction" onClick={sign}>-</button>
          <button className="grid-item item15" value="0" onClick={number}>0</button>
          <button className="grid-item item16" value="=" onClick={compute}>= </button>

        </div>



    </div>
  );
}

export default App;
