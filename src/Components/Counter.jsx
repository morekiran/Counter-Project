import React,{useState} from "react";
import "./Counter.css";

const Counter = () => {

    const [value,setValue] = useState(0);

    return(
        <>
        <div className="Counter">
            <h1>Counter :{value}</h1>

        <button onClick={()=> setValue(value + 1)}>Increment</button>   
        <button onClick={()=> setValue(value - 1)}>Decrement</button>
        <button onClick={()=> setValue(0)}>Reset</button>
        </div>
        </>
    )
}

export default Counter;