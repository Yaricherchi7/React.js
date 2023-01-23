import React from "react";
import { Age } from "./Age";

export function Welcome({name}){
    return(
        <div className="welcome">
       <p> Welcome {name}!</p>
        <Age age="27"/>
       </div>
)}


/* export class Welcome extends React.Component {
    render(){
        return(
         <div className="welcome">
        <p> Welcome {this.props.name}!</p>
         <Age age="27"/>
        </div>
    )}
} */