import React, {Component} from "react";
import { connect } from "react-redux";
import { newCounter } from "./actions";

class CreateCounter extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    render(){
        return (
          <div>
            <p>
            <input type="text" 
                placeholder="name" 
                value={this.state.name}
                onChange = {(e)=>this.setState({name: e.target.value})}
            />
            </p>
            <p>
              <button onClick={()=> this.props.newCounter(this.state.name)}>Create</button>
            </p>
          </div>
        );
    }
}
const mapDispatchToProps = ()=>{
    return {
        newCounter
    }
}

export default connect(undefined, mapDispatchToProps())(CreateCounter);