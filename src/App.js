import React from "react";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { GithubUserList } from "./GithubUserList";

export class App extends React.Component {

  render() {
    return (
      <div className="bg-slate-200 p-10"  >
        <Welcome name="Yari"/>
        <GithubUserList/>
      </div>
    );
  }
}
