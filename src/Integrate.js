import { useState } from "react";
import './integrate.css';
export default function Integrate() {
    const [state, setState] = useState(" ");
    const [name, setName] = useState(" ");
    const [Last,setLast] = useState(" ");
    function functionality(e){
        e.preventDefault();
    }
    function apiPost(){
        fetch('http://localhost:4000/insert',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                LastName: Last,
                state: 0
            }),
        }).then((res)=>res.json()).then((data)=>{console.log("entireData",data)})


    }
    return(
        <div>
        <div class="header">
            <h1>Api Integration</h1>
            <form onSubmit={functionality}>
                <div class="container">
                <h2>Enter first name</h2>
                <input type="text"  value={name} placeholder="Enter your first name" onChange={(e)=>setName(e.target.value)}/>
                <br /><br />
                <h2>Enter last name</h2>
                <input type="text" value={Last} placeholder="Enter your last name" onChange={(e)=>setLast(e.target.value)} />
                <br /><br />
                <div class="radio">
                <h2>classX</h2>
                <label>
                    <input type="radio" value="0" checked={state === "0"} onChange={(e)=>setState(e.target.value)} />
                </label>
                <br></br>
                <h2>classXI</h2>
                <label>
                    <input type="radio" value="1" checked={state === "1"} onChange={(e)=>setState(e.target.value)} />
                </label>
                </div>
                <br /><br />
                <button onClick={()=>{apiPost()}}>submit</button>
                </div>

            </form>
        </div>
        </div>
    )
}