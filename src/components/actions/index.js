//make action for increment and decrement and then we will call it another time anywhere in our application.
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NEW_COUNTER = 'NEW_COUNTER';

export const incrementCounter = (index) =>{
    return {
        type: 'INCREMENT',
        payload: {index}
    }
}

export const decrementCounter = (index)=>{
    return {
        type: 'DECREMENT',
        payload: {index}
    }
}
export const newCounter = (name)=>{
    return {
        type: 'NEW_COUNTER',
        payload: {name}
    }
}