import { Component } from "react";

class Calc extends Component {
    constructor(props){
        super(props);

        this.state={
            n1:0,
            n2:0,
            result: "Click any button to see result"
        };
    }

    compute = event => {
        let action = event.target.name;
        let res  = "";
        let n1 = this.state.n1;
        let n2 =  this.state.n2;
        switch(action){
            case 'sum': res = `sum of ${n1} and ${n2} is ${n1+n2} `; break;
            case 'dif': res = `difference of ${n1} and ${n2} is ${n1-n2} `; break;
            case 'prd': res = `product of ${n1} and ${n2} is ${n1*n2} `; break;
            case 'qut': res = `quotient of ${n1} and ${n2} is ${n1/n2} `; break;
            case 'rem': res = `remainder of ${n1} and ${n2} is ${n1%n2} `; break;
        }
        this.setState({result:res});
    }

    render(){
        return (
            <div>
                <label> Operand 1:
                        <input type="number" value={this.state.n1} onChange={e=> this.setState({n1:parseInt(e.target.value)})} ></input>
                </label>
                <label> Operand 2:
                        <input type="number" value={this.state.n2} onChange={e=> this.setState({n2:parseInt(e.target.value)})} ></input>
                </label>
                <p>
                    <button name="sum" onClick={this.compute} >Add</button>
                    <button name="dif" onClick={this.compute} >Difference</button>
                    <button name="prd" onClick={this.compute} >Product</button>
                    <button name="qut" onClick={this.compute} >Quotient</button>
                    <button name="rem" onClick={this.compute} >Remainder</button>
                </p>
                <p>
                    <strong>
                        {this.state.result}
                    </strong>
                </p>
            </div>
        );
    }
}

export default Calc;