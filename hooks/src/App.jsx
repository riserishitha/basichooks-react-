import { createContext, useState,  } from "react";
import "./App.css";
import Task from "./component/task";
export  const theam=createContext()
function App(){
    const [state,setsta]=useState(false)
    return(
        <div className="all">
           <theam.Provider value={state}>
            <button onClick={()=>{setsta(!state)}}>toggle</button>
            <Task/>
           </theam.Provider>
        </div>
    )
}
export default App;
