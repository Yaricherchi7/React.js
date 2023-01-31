import React from "react";
import { Welcome } from "./Welcome";
import { HookLogin } from "./HookLogin";
import { GithubUsers } from "./GithubUsers";
import { HookCounter } from "./HookCounter";
import { CarDetail } from "./CarDetails";

export class App extends React.Component {

  render() {
    return (
      <div className="bg-slate-200 p-10"  >
        <Welcome name="Yari"/>
        <CarDetail 
        model="Yaris"
        year= "1995"
        color ="giallo"
        />
      </div>
    );
  }
}
