import "./css/App.css";
import Button from "./components/Button";
import ScreenShow from "./components/ScreenShow";
import ButtonClear from "./components/ButtonClear";
import {useState} from "react";
import {evaluate} from "mathjs";
import Logo from "./components/Logo";


function App() {
  const [input,setInput] = useState("");
  const addInput = val => {
    setInput(input + val);
  };
  const calcResult = () => {
    if(input ) {
      setInput(evaluate(input));
    }
    else {
      alert("El cálculo requiere números");
    }
  };  

  return (
    <div className="App">
        <Logo />
        <div className="calculator-container">
        <div className="calculator-row">
          <ScreenShow input={input} />
        </div>
          <div className="calculator-row">
            <Button eventClic = {addInput}>1</Button>
            <Button eventClic = {addInput}>2</Button>
            <Button eventClic = {addInput}>3</Button>
            <Button eventClic = {addInput}>+</Button>
          </div>
          <div className="calculator-row">
            <Button eventClic = {addInput}>4</Button>
            <Button eventClic = {addInput}>5</Button>
            <Button eventClic = {addInput}>6</Button>
            <Button eventClic = {addInput}>-</Button>          
          </div>
          <div className="calculator-row">
            <Button eventClic = {addInput}>7</Button>
            <Button eventClic = {addInput}>8</Button>
            <Button eventClic = {addInput}>9</Button>
            <Button eventClic = {addInput}>*</Button>
          </div>
          <div className="calculator-row">
            <Button eventClic = {calcResult}>=</Button>
            <Button eventClic = {addInput}>0</Button>
            <Button eventClic = {addInput}>.</Button>
            <Button eventClic = {addInput}>/</Button>
          </div>
          <div className="calculator-row">
            <ButtonClear eventClear={() => setInput("")} > Clear</ButtonClear>
          </div>        
        </div>
    </div>
  );
}

export default App;
