import React from "react";
const Counter = ({index,value,name,incrementCounter,decrementCounter})=>{
    return (
      <div>
        <h1>{value}</h1>
        <p>{name}</p>
        <p>
          <button onClick={() => incrementCounter(index)}>+</button>
          <button onClick={() => decrementCounter(index)}>
           -
          </button>
        </p>
      </div>
    );
}
export default Counter