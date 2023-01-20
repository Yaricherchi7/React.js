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

  removeFields = ()=>{
    this.setState({
    username: "",
    password: "",
    checkbox: false,
    buttonDisabled: true,
    })
  }

  render() {

    const PasswordStyle = {
      backgroundColor : this.state.password.length < 8 ? "red": "green",
      color: this.state.password.length < 8 ? "white": "black"
    }

    return (
      <div>
        <form>
          <input className="border-2 border-slate-500 m-2"
            name="username"
            type="text"
            value={this.state.value}
            onChange={this.HandlerInputchange}
          />

          <input className="border-2 border-slate-500 m-2"
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
            onChange={this.HandlerInputchange}
          />
          <button className="mx-2 py-1 px-2 rounded"
          style={PasswordStyle}
          name="button"
            disabled={this.state.buttonDisabled}
            onClick={this.onLogin}
          >
            login
          </button>
          <button className=" mx-2 py-1 px-2 bg-slate-900 text-white rounded"
          name="button"
          type="remove"
          onClick={this.removeFields}
          >
            Reset
          </button>
        </form>
      </div>
    );
  }
}


