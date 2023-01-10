import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            count : this.props.initialValue
        };
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                count : (this.state.count + this.props.increment)
            })
        },this.props.interval) 
    }

    render(){
        return <div>
            <CounterDisplay counting={this.state.count}/>
        </div>
    }
}
