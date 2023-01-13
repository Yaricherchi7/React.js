import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    checkbox: false,
    buttonDisabled: true,
    
  };

  HandlerInputchange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      [checked]: true,
      buttonDisabled: this.state.username && this.state.password ? false : true 
    });
  };

  onLogin = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="username"
            type="text"
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
            value={this.state.username}
            checked={this.state.checkbox}
            onClick={this.HandlerInputchange}
          />
          <button
          name="button"
            disabled={this.state.buttonDisabled}
            onClick={this.onLogin}
          >
            login
          </button>
        </form>
      </div>
    );
  }
}
