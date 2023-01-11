import React from "react";

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.click,
    };
  }

  handleCounter = ()=> {
    this.setState((state)=>{
        return {
            counter : state.counter + this.props.incrementBy,
        }
    })
  }

  render(){
    return <div>
        <h3> Count : {this.state.counter}</h3>
        <button onClick={this.handleCounter}> add +1 at counter</button>
    </div>
  }

  
} 

/* Create a ClickCounter class component that increments
 a counter every time a user clicks on a button.
 Render both the current value of the counter and 
 the button within the ClickCounter component. */
