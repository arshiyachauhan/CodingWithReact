import React, {Component} from "react";
class Counter extends Component{
    //constructor to initialize object inside class
    constructor(props){
        //super keyword used to inherit data from parent
        super(props);
            this.state ={
                count: 0
            };
        }

        //method to increment count
        increment= () =>{
            this.setState(prevState => ({
                count: prevState.count+1
            }));
        };

        //method to decrement count
        decrement= () =>{
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        }
render(){
    return(
        <div className="counter">
            <p>{this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
    )
}}
export default Counter;
