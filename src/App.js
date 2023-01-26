import React from "react";
import { HookCounter } from "./HookCounter";
import { HookLogin } from "./HookLogin";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export class App extends React.Component {

  render() {
    return (
      <div >
        <Welcome name="Yari"/>
        <Sum/>
        <HookCounter initialvalue={0}/>
        <HookLogin/>
        
      </div>
    );
  }
}
