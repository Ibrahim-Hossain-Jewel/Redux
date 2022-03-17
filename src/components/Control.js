import React from "react";
import { connect } from "react-redux";

const Control = (props)=>{
    return (
        <div>
            <button onClick={()=> props.add()}> + </button>
            <button onClick={()=> props.sub()}> - </button>
        </div>
    )
}
//Now design the dispatch() function;
const mapDispatchtoProps = (dispatch)=>{
    return {
        add: ()=>{
            dispatch({
                type: 'ADD'
            })
        },
        sub: ()=>{
            dispatch({
                type: 'SUB'
            })
        }
    }
}
export default connect(null, mapDispatchtoProps)(Control);