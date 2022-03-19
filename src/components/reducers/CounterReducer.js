import { INCREMENT, DECREMENT, NEW_COUNTER } from "../actions";

const CounterReducer = (state = [], action)=>{
    
    switch(action.type){
        case INCREMENT : return state.map((counter,i) => {
            if(action.payload.index === i){
                counter.value+=1;
            }
            return counter;
        });

        case DECREMENT : return state.map((counter,i)=>{
            if(action.payload.index === i){
                counter.value-=1;
            }
            return counter;
        });

        case NEW_COUNTER : return [...state, {name: action.payload.name, value: 0}] //factory function now as object literal
        default :  return state;
    }
}

export default CounterReducer;
