import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";
import Counter from "./Counter";
//most mysterious things in the whole things
class Counters extends React.Component{

    renderCounter = ()=>{
        return this.props.times.map(
            (counter, index)=>{
            return (
              <div key={index}>
                <Counter
                  index={index}
                  {...counter}
                  incrementCounter={this.props.incrementCounter}
                  decrementCounter={this.props.decrementCounter}
                />
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

export default connect(mapStateToProps, mapDispatchToProps())(Counters);
