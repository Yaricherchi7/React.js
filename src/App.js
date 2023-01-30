import React from "react";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { GithubUsers } from "./GithubUsers";

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
