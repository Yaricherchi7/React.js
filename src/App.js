import React from "react";
import { HelloWord } from "./HelloWord";
import { Welcome } from "./welcome";



export class App extends React.Component {
    render(){
        return <div> 
            <HelloWord/>
            <Welcome name="Yari"/>
        </div>
    }
}