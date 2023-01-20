import React from "react";
import { Login } from "./Login";
import { TodoList } from "./TodoList";

import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";





export class App extends React.Component {
    render(){
        return (
        <div> 
            <Welcome name="Jhon" age="22" />
            <Login/>
            <h1> My First from</h1>
            <UncontrolledLogin/>
            <TodoList/>
        </div>
        )
    }
}