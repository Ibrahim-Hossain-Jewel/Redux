const initialState = {
    count: 1000
}

const rootReducers = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD': 
            {
                return {
                  count: state.count + 1,
                };
            }
        
        case 'SUB': 
            return {
                count: state.count - 1
            }
        
        default : return state;
    }
}
export default rootReducers;