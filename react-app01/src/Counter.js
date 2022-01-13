import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    increment = event => {
            this.setState({count:this.state.count+1});
    }
    decrement = event =>{
            this.setState({count:this.state.count-1});
    }

    changeCount = event =>{
        if(event.target.name==='btn1')
            this.setState({count:this.state.count+1});
        else
            this.setState({count:this.state.count-1});
    }

    render(){
        return(
            <div>
                <button name  = "btn1" onClick={this.changeCount}>UP</button>
                <strong>{this.state.count}</strong>
                <button  name  = "btn2" onClick={this.changeCount}>DOWN</button>
            </div>
        );
    }
}

export default Counter;