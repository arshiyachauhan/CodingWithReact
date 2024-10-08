import React, {useContext} from "react";
import { NameContext,AgeContext } from "./App";
function Child3(){
    const name= useContext(NameContext);
    const age= useContext(AgeContext);

    return(
        <>
        <p>Child3: Name is {name}</p>
        <p>Child3: Age is {age}</p>
        </>
    );
}
export default Child3;
