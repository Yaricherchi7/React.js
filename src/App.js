import React from "react";
import { ClickCounter } from "./ClickCounter";

import { HelloWord } from "./HelloWord";
import { Welcome } from "./Welcome";


export class App extends React.Component {
    render(){
        return <div> 
            <HelloWord/>
            <Welcome name="Jhon" age="64" />
            <ClickCounter click={0}  incrementBy={1}/>
        </div>
    }
}