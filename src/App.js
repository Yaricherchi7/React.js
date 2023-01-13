import React from "react";
import { ClickCounter } from "./ClickCounter";

import { HelloWord } from "./HelloWord";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";


export class App extends React.Component {
    render(){
        return (
        <div> 
            <HelloWord/>
            <Welcome name="Jhon" age="22" />
            <ClickCounter click={0}  incrementBy={1}/>
            <InteractiveWelcome/>
            <h1> My First from</h1>
            <UncontrolledLogin/>
        </div>
        )
    }
}