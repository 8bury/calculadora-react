import { React, useReducer } from 'react';
import './App.css';
import DigitButton from './components/DigitButton';
import OperatorButton from './components/OperatorButton'

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  REMOVE_DIGIT: "remove-digit",
  EVALUATE: "evaluate"
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload.digit}`
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === ""){
        return {
          ...state,
          previousOperand: "",
          currentOperand: "",
          operator: ""
        }
      }
      if (state.previousOperand !== ""){
        return {...state, 
          previousOperand: `${parseFloat(state.currentOperand) + parseFloat(state.previousOperand)}`,
            currentOperand: ``,
            operator: payload.operator
          }
      }
      return {
        ...state,
        previousOperand: `${state.currentOperand}`,
        currentOperand: ``,
        operator: payload.operator,
      }
    default:
      console.error("Invalid action type");
      return state;
  }
}

function App() {
  const [{ currentOperand, previousOperand, operator }, dispatch] = useReducer(reducer, {
    currentOperand: "",
    previousOperand: "",
  operator: "",})

  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-operand">{previousOperand}{operator}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="button2">AC</button>
      <button className="button">DEL</button>
      <OperatorButton operator="+" dispatch={dispatch}/>
      <DigitButton digit={"1"} dispatch={dispatch}/>
      <DigitButton digit={2} dispatch={dispatch}/>
      <DigitButton digit={3} dispatch={dispatch}/>
      <OperatorButton operator="*" dispatch={dispatch}/>
      <DigitButton digit={4} dispatch={dispatch}/>
      <DigitButton digit={5} dispatch={dispatch}/>
      <DigitButton digit={6} dispatch={dispatch}/>
      <OperatorButton operator="+" dispatch={dispatch}/>
      <DigitButton digit={7} dispatch={dispatch}/>
      <DigitButton digit={8} dispatch={dispatch}/>
      <DigitButton digit={9} dispatch={dispatch}/>
      <OperatorButton operator="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit={0} dispatch={dispatch}/>
      <button className="button2">=</button>
    </div>
  )
}

export default App;

