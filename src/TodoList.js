import React from "react";

export class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        items: [
          "Html",
          "Css",
          "Javascript",
          "React",
          "Git",
          "Typescript",
          "Node.js",
          "Tailwind CSS",
        ],
        value : ""
      };
  }


  SaveInputs = (event)=> {
    this.setState({
        value: event.target.value
    })
  }
  AddItems = (event) => {
    event.preventDefault()
    this.setState({items : [...this.state.items, this.state.value]})
    
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((items, index) => (
            <li key={items + index}>{items}</li>
          ))}
        </ul>
        
          <input name="input" type="text" value={this.state.value} onChange={this.SaveInputs}/>
          <button name="submit" onClick={this.AddItems}>
            Add
          </button>
      </div>
    );
  }
}

