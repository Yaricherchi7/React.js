import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    checkbox: "",
    onLogin: "false"
  };

  HandlerInputchange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

        this.setState({
        [name]: type === "checkbox" ? checked : value,
        
        });
    }

    HandlerClick = ()=> {
        this.setState({
            onLogin : true,
        })
    }
    componentDidUpdate(){
        console.log(this.state)
    }
  

  render() {
        return (
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
            <button 
            disabled={!this.state.username || !this.state.password}
            onClick={this.HandlerClick}
            >
            Bottone
            </button>
        </div>
        );
    }
}

