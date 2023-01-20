import React from "react";
import { TodoList } from "./TodoList";

import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";



export class App extends React.Component {
    render(){
        return (
        <div> 
            <Welcome className="welcome" name="Jhon" age="22" />
            <h1> My First from</h1>
            <UncontrolledLogin/>
            <TodoList/>
        </div>
        )
    }
}