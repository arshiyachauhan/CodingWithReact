//useRef creates a mutable variable which will not re-render functional components inside the DOM again and again as in useEffect and change the value of current object directly
import React, {useState, useEffect, useRef} from 'react';
const Useref= () => {
    const [myData, setMyData] = useState("");
    // const [count, setcount]= useState(0);
    // useEffect(()=>{
    //     setcount(count+1);s
    // },[myData])
    
    const count= useRef(10);
    console.log(count);
    useEffect(()=> {
        count.current= count.current+1;
    })
    // },[myData])

    const inputEle=useRef("");//create element to access element

    const changeStyle=()=>{
        inputEle.current.style.backgroundColor="yellow";
        // console.log(inputEle.current);
    }


    return(
        <>
        <input
        ref={inputEle}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}/>
        {/* <p> The number of times rendered: {count.current}</p> */}
        <button onClick={changeStyle}>Submit</button>
        </>
    );
};
export default Useref;
