import React from "react";

export class ClickCounter extends React.Component {
 
  
  handleCounter = (e)=> {
    const titolo = document.querySelector("#h1")
    titolo.textContent = e.target.textContent
    
  }

  render(){
    return <div>
        <h1 id="h1">testo</h1>
        <button  onClick={this.handleCounter}> primo</button>
        <button  onClick={this.handleCounter}> secondo</button>
        <button  onClick={this.handleCounter}> terzo</button>

    </div>
  }

  
} 

/* Create a ClickCounter class component that increments
 a counter every time a user clicks on a button.
 Render both the current value of the counter and 
 the button within the ClickCounter component. */
