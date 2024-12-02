import React from 'react';
import useCounter from './Customhooks';
const  CounterComponent =() => {
    const {count, Increment, decrement, reset}= useCounter(0);
    return(
        <div>
        <h1>Counter: {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
};
export default CounterComponent;
