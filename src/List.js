import { Table } from "react-bootstrap";
export default function List(){
const user=[
    {name:"John",age:25,address:[
        {city:"New York",country:"USA"},
        {city:"Sydney",country:"Australia"}
    ]},
    {name:"Doe",age:30,address:[
        {city:"London",country:"UK"},
        {city:"Paris",country:"France"}
    ]},
    {name:"Smith",age:35,address:[
        {city:"Delhi",country:"India"},
        {city:"Beijing",country:"China"}
    ]}
]
return(
    <div>
        <h1>List of Table Details</h1>
        <Table variant="dark" striped>
            <tbody>
                <tr>
                    <td>S.NO</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                </tr>
                {user.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <Table variant="dark" striped>
                                <tbody>
                                    {item.address.map((address,index)=>(
                                        <tr key={index}>
                                            <td>{address.city}</td>
                                            <td>{address.country}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                ))}

            </tbody>

        </Table>
    </div>

)
}
     