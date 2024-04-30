import React,{useState}from "react";
export default function Display() {
    const [name,setName]=useState(null);
    const [print,setPrint]=useState(false);

    function getData(val){
        setName(val.target.value);
        setPrint(false);
    }
  return (
    <div>
        {
            print? <h1>{name}</h1>:null
        }
      <input type="text" placeholder="Enter your name" onChange={(e)=>getData(e)}/>
       <button onClick={()=>setPrint(true)}>Submit</button>
    </div>
  );
}