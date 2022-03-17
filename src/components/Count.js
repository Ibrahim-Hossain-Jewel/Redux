import React from "react";
import { connect } from "react-redux";
const Count = (props)=>{
    return(
        <div>{props.counted}</div>
    )
}
const mapToStateData = (state)=>{
    return {
        counted: state.count //count must have to declared inside the initial state;
    }
}

export default connect(mapToStateData)(Count);