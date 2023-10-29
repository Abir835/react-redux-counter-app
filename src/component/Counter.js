import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../services/actions/counterAction";


const Counter = () =>{
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handlerIncrement = () =>{
        dispatch(incrementCounter());
    };

    const handalerDecrement = () =>{
        dispatch(decrementCounter());
    };

    const handalerReset = () =>{
        dispatch(resetCounter());
    };
    return(
        <div>
            <h2>Counter App</h2>
            <h3>Count: {count}</h3>
            <button onClick={handlerIncrement}>Increment</button>
            <button onClick={handalerDecrement}>Decrement</button>
            <button onClick={handalerReset}>Reset</button>
        </div>
    )

};

export default Counter;

