import { INCREMENT, DECREMENT, RESET} from "../constance/counterConstance";

export const incrementCounter = () =>{
    return{
        type: INCREMENT
    }
};


export const decrementCounter = () =>{
    return{
        type: DECREMENT
    }
};


export const resetCounter = () =>{
    return{
        type: RESET
    }
};