import React from "react";

export class TodoList extends React.Component {
  state = {
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
  };

  SaveInputs = (event)=> {
    this.setState({
        input : event.target.value
    })
  }
  AddItems = () => {
    let { items, input } = this.state;
    items.push(input)
    this.setState({items : items})
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((items, index) => (
            <li key={items + index}>{items}</li>
          ))}
        </ul>
        
          <input name="text" type="text" onChange={this.SaveInputs}/>
          <button name="submit" onClick={this.AddItems}>
            Add
          </button>
      </div>
    );
  }
}

/* Create a TodoList component that renders a ul tag
 with a li tag for each item contained in the items state variable.
 The items state variable should be an array of strings.
 The TodoList component should also contain an input tag and a button.
 When the button is clicked, the event handler should add
 the value of the input tag to the items array. */
