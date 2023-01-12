import React from "react";


export class Login extends React.Component {

    state = {
        username : "",
        password : "",
        checkbox: "",
    }

    HandlerInputchange = (event) =>{
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value
            
        })
    }

render(){
    return(
        <div>
            <input 
            name="username"
            type="username" 
            value={this.state.value}
            onChange={this.HandlerInputchange}
            />
            
            <input 
            name="password"
            type="password" 
            value={this.state.password}
            onChange={this.HandlerInputchange}
            />

<input 
            name="checkbox"
            type="checkbox" 
            value={this.state.password}
            onChange={this.HandlerInputchange}
            />
        </div>
    )
}
}






/* Create a Login component containing three inputs: a username input,
 a password input and a remember checkbox.
  All three inputs should be controlled components. */