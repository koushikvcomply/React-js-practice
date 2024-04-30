import { useState } from "react";
import React from "react";
export default function Toggle() {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            {
                isOn? <h1>ON</h1>:null
            }
              <button onClick={()=>setIsOn(false)}>Hide</button>
              <button onClick={()=>setIsOn(true)}>Show</button><br /><br /> 
              <button onClick={()=>setIsOn(!isOn)}>Toggle</button>
        </div>
    );
};