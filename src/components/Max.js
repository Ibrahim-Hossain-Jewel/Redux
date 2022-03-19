import React from "react";
import { connect } from "react-redux";
class Max extends React.Component{

    render(){
        const values = this.props.counters.map(counter => {
            return counter.value;
        });
        return(
            <div>
                <h1>Max : {Math.max(...values)}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      counters: state.counters
    };
}
export default connect(mapStateToProps)(Max);