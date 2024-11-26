//UseMemo hook returns the memoized value, increase performance
//Usememo handles variable whereas usecallback handles function
//Usememo used for faster result

import {React, useState, useMemo } from 'react';
function Usememo(){
    const [minus, setminus]=useState(100);
    const [add, setadd]=useState(0);
    const multiplication = useMemo (function multiply(){
        console.log("hdgjhSGjdsHKJFhskjFhksfhkjz")
        return add*10;
    }, [add])
    return(
        <>
        {multiplication}
        <br/>
        <button onClick={()=> setadd(add+1)}>Addition</button>
        <span>{add}</span>
        <button onClick={()=> setadd(minus-1)}>Subtraction</button>
        {minus}
        </>
    )
}
export default Usememo;
