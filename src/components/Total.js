import React,{Component} from "react";
import { connect } from "react-redux";
class Total extends Component{

    render(){
        return(
            <div>
                <h1>{this.props.combineReducerData.reduce((acc,currentValue)=> acc + currentValue.value,0)}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        combineReducerData: state.counters
    }
}

export default connect(mapStateToProps)(Total);