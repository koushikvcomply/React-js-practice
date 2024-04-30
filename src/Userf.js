import React,{useMemo,useState} from "react";
export default function Userf(){   
    const [count,SetCount]=useState(0)
    const[countdown,SetCountdown]=useState(0)
    let Memo=useMemo(()=>{
        console.log("hello")
        return count*5;

    });
    return(
        <div>
            <h1>UseMemo functionality</h1>
            <h1>{count}</h1>
            <h1>{countdown}</h1>
            <h1>auto incremented value {Memo}</h1>
            <button onClick={()=>SetCount(count+1)}>Increment</button>
            <button onClick={()=>SetCountdown(countdown-1)}>Decrement</button>
        </div>
    )
}