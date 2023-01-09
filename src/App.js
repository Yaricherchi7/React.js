import React from "react";
import { Counter } from "./Counter";
import { HelloWord } from "./HelloWord";
import { Welcome } from "./Welcome";


export class App extends React.Component {
    render(){
        return <div> 
            <HelloWord/>
            <Welcome name="Jhon" age="64" />
            <Counter initialValue={0} interval={1000} increment={1}/>
        </div>
    }
}