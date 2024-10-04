//hooks allow u to use state and other react features without writing a class, does not work inside a class, inside top level
//usestate- for state management,creste functional
//useEffect-sideeffect- provides a way to declare and manage state variables directly within a function component, syntax- useEffect func(=>{},[dependemcy]);
import React ,{ useState, useEffect} from 'react';
const Hook=()=>{
    //array destructuring used- where count is current val(0), setcount is updated value, initial val = 0
    const [count, setcount] = useState(200);
    useEffect(() => {
        console.log(`You clicked {$count} times`)},[count]);
    const Increment=()=>{
        setcount(count+1)
    }
    const Decrement=()=>{
        setcount(count-1)
    }
    return(
        <>
        <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </div>
        </>
    );
}
export default Hook;
