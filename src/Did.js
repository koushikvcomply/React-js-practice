import React,{Component} from "react";
export default class Did extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    shouldComponentUpdate(prevProps,prevState){
        console.log("shouldComponentUpdate",prevState.count,this.state.count);
        return true;
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>update name</button>

            </div>
        )
    }


}