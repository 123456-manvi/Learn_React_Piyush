import { createContext, useState } from "react";

export const CounterContext=createContext(null);

export const CounterProvider=(props)=>{
    // state
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{ count, setCount, name:"Piyush" }}>
           {/* wrap children in countercontext provider */}
           {props.children}
        </CounterContext.Provider>
    );
};