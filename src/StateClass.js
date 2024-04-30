import React from 'react';
export default class StateClass extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:0
        }
    }

     update(data)
    {
        this.setState({data:data+1});
        
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.update(this.state.data)}>update</button>
            </div>
        )
    }
}