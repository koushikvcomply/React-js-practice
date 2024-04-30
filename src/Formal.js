import React,{useState} from "react";
function Form(){
    const [name,setName]=useState(null);
    const [print,setPrint]=useState(false);
    const [selection,setSelection]=useState(null);
    function getData(val){
        val.preventDefault();
    }
    function getNameInfo(val){
        setName(val.target.value);
    }
    function printInfo(){
        console.log(name,selection,print);
    }
    function setTheSelection(val){
        setSelection(val.target.value);
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={getData}>
                <br />
            <input type="text" placeholder="Enter your name" onChange={(e)=>getNameInfo(e)}/>
            <br />
            <select onChange={(e)=>setTheSelection(e)}>
                <option>--select one option---</option>
                <option>Marvel</option>
                <option>DC</option>
                <option>Dark Horse</option>
            </select>
            <br />
            <input type="radio"/><span>Class X</span>
            <input type="radio" /><span>Class XI</span>
            <br />
            <input type="checkbox" onChange={()=>setPrint(true)}/><span>Activate</span>
            <input type="checkbox" onChange={()=>setPrint(true)}/><span>Deactivate</span>
            <br />
            <button type="submit" onClick={()=>printInfo()}>Submit</button>
            </form>
        </div>
    );

}
export default Form;