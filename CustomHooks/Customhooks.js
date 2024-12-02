//Customhooks- created by user
//Creating UseCounter here
import {useState} from 'react';
function useCounter(initialValue=0){
    const[count, setCount]= useState(initialValue);
    const Increment=() => setCount((prevCount) => prevCount+1);
    const decrement=()=>  ((prevCount)=> Math.max(prevCount-1, 0));
    const reset =() => setCount(initialValue);
    return {count, Increment, decrement, reset};
}
export default useCounter;
