import React from "react";
import { Welcome } from "./Welcome";
import { HookLogin } from "./HookLogin";

export class App extends React.Component {

  render() {
    return (
      <div className="bg-slate-200 p-10"  >
        <Welcome name="Yari"/>
        <HookLogin/>
      </div>
    );
  }
}
