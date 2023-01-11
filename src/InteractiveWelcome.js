import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            inputName : ""
        }
    }

 HandlerInputOnCHange = (e)=> {
    const name = e.target.name
    const value = e.target.value
    this.setState({
        [name] : value
    })
 }
    render(){
        return (
            <div>
                <Welcome name={this.state.inputName}/>
                <input name="inputName" value={this.state.inputName} onChange={this.HandlerInputOnCHange} />  
                
            </div>
        )
    }
}