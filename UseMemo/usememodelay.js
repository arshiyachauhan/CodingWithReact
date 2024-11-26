//Code for adding delay in counter
import React, { useState, useMemo } from 'react';
const UseMemo=()=>{
    const[myNum, setMyNum]= useState(0);
    const [show,setShow]=useState(true);
    const getValue = () => {
        return setMyNum(myNum+1);
    };

    //this function creates the problem
    const countNumber= (num) =>{
        console.log("file:Memo.jsx ~ line 12 ~ countNumber ~ num", num);
        for(let i=0;i <= 1000000000; i++){}
        return num;
    };
    const checkData= countNumber(myNum)

    // const checkData= useMemo(()=>{
    //     return countNumber(myNum);
    // }[myNum]);
   
    return(
        <>
        <button onClick={getValue} style ={{backgroundColor: "red"}}>Counter</button>
        <p>New number : {checkData}</p>
        <button onClick={() => setShow(!show)}>
            {show ? "You clicked me" : "Click me"}
        </button>
        </>
    );
;
}
export default UseMemo;
