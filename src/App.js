import React from "react";
import { TodoList } from "./TodoList";

import { UncontrolledLogin } from "./UncontrolledLogin";



export class App extends React.Component {
    render(){
        return (
        <div> 
            <h1> My First from</h1>
            <UncontrolledLogin/>
            <TodoList/>
        </div>
        )
    }
}