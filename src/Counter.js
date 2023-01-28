import React from "react";
import {useState} from "react";
import "./Counter.css";

// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             counter: 0,
//         };
//     }
//     incrementCounter() {
//         this.setState((prevState) => {
//             return {
//                 counter: prevState.counter + 1
//             };
//         });
//     }
//     decrementCounter() {
//         this.setState((currentState) => {
//             return {
//                 counter: currentState.counter - 1
//             };
//         });
//     }
//     resetCounter(){
        
//     }
//     render() {
//         return (
//             <div className="counterContainer">
//                 <h2>{this.state.counter}</h2>
//                 <button onClick={() => {
//                     this.incrementCounter()
//                 }}>Increment</button>

//                 <button onClick={() => {
//                     this.decrementCounter()
//                 }}>Decrement</button>

//                 <button onClick={() => {
//                     this.resetCounter()
//                 }}>Reset</button>

//             </div>
//         );
//     }
// }
function Counter() {
  const [val,setVal]=useState(0)
  
  function do_inc(){
    setVal(val+1);
  }
  function do_dec(){
    if(val>0)
    setVal(val-1);
    else{
      alert("Value can't be less then zero!!")
    }
  }
  function reset(){
    setVal(0);
  }
  return (
    <div className='counterContainer'>
      <h2 className='counterValue'>{val}</h2>
      <button className='counterButton' onClick={do_inc}>Increment +</button>
      <button className='counterButton' onClick={do_dec}>Decrement -</button>
      <div><button className='counterButton' onClick={reset}>Reset</button></div>
    </div>
  );
}
export default Counter;