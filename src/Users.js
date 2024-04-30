import { useState} from "react";
export default function Testing()
{
    const [data,setData]=useState(0);
    function updated(data)
    {
        alert('Updated');
        console.log(data);
    }
    function apple()
    {
        setData(data+1);
        updated(data+1);
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={apple}>update</button>
        </div>
    )
}