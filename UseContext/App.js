import React, {createContext} from "react";
import Child1 from './Child1';
const NameContext= createContext();
const AgeContext= createContext();
function App(){
    const name= "AAAA";
    const age= 15;
    return(
        <NameContext.Provider value={name}>
            <AgeContext.Provider value={age}>
            </AgeContext.Provider>
        </NameContext.Provider>
    );
}
export default App;
export{NameContext, AgeContext};
