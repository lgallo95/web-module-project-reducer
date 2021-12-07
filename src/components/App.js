import React, { useReducer } from 'react';
import reducer, {initialState} from '../reducers';
import './App.css';
import {addOne, applyNumber, applyOperation, applyClear, addToMemory, connectMemoryToTotal, clearAllMemory} from '../actions/index'
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAddOne = () => {
  //   dispatch(addOne());
  // }

  const handleApplyNumber = (x) => {
    dispatch(applyNumber(parseInt(x.target.value)));
  }

  const handleApplyOperation = (x) =>{
    dispatch(applyOperation(x.target.value))
  }  

  const handleApplyClear = (x) =>{
    dispatch(applyClear(x.target.value))
  }

  const handleAddToMemory = () => {
    dispatch(addToMemory())
  }
  const handleConnectMemoryToTotal = () => {
    dispatch(connectMemoryToTotal())
  }
  const handleClearAllMemory = () => {
    dispatch(clearAllMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddToMemory}/>
              <CalcButton value={"MR"} onClick={handleConnectMemoryToTotal}/>
              <CalcButton value={"MC"} onClick={handleClearAllMemory}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={1}/>
              <CalcButton onClick={handleApplyNumber} value={2}/>
              <CalcButton  onClick={handleApplyNumber} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={4}/>
              <CalcButton  onClick={handleApplyNumber} value={5}/>
              <CalcButton  onClick={handleApplyNumber} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyNumber} value={7}/>
              <CalcButton onClick={handleApplyNumber} value={8}/>
              <CalcButton onClick={handleApplyNumber} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleApplyOperation} value={"+"}/>
              <CalcButton onClick={handleApplyOperation} value={"*"}/>
              <CalcButton onClick={handleApplyOperation} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleApplyClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
