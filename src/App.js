import React from "react";
import { Counter } from "./Counter";
import { GithubUsers } from "./GithubUsers";
import { Welcome } from "./Welcome";

export class App extends React.Component {

  render() {
    return (
      <div >
        <Welcome name="Yari"/>
        <Counter/>
        <GithubUsers username="yaricherchi7"/>
      </div>
    );
  }
}
