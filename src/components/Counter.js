import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";
//most mysterious things in the whole things
class Counter extends React.Component{

    renderCounter = ()=>{
        return this.props.times.map(
            (counter, index)=>{
            return (
              <div key={index}>
                <h1>{counter.value}</h1>

                <p>{counter.name}</p>
                <p>
                  <button onClick={() =>  this.props.incrementCounter(index)}>
                    +
                  </button>
                  <button onClick={() => this.props.decrementCounter(index)} >
                    -
                  </button>
                </p>
              </div>
            );
        })
    }
    render(){
        return(
            <div>
            {
                this.renderCounter()
            }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      times: state.counters
    };
}
const mapDispatchToProps = ()=>{
    return {
      //You can change the key name too.
      incrementCounter,
      decrementCounter
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
