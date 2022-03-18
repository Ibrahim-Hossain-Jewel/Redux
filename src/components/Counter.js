import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";
//most mysterious things in the whole things

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
                <p>
                    <button onClick={() => this.props.incrementCounter() }>+</button>
                    <button onClick={()=> this.props.decrementCounter() }>-</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{ //this state are from 
    console.log(state)
    return {
      count: state.jewel
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
