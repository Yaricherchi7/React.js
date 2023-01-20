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
      <div className="p-10 m-5 text-center text-color-black">
        <form className="gap-5">
          <input className=" border-black border-3 px-3"
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
            onChange={this.HandlerInputchange}
          />
          <button 
          style={PasswordStyle}
          name="button"
            disabled={this.state.buttonDisabled}
            onClick={this.onLogin}
          >
            login
          </button>
          <button className="border-2 bg-blue-500 hover:bg-blue-700 text-white "
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


