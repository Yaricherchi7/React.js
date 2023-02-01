import React from "react";
import { useParams } from "react-router-dom";
import { Age } from "./Age";

export function Welcome(){

    const {name = "Yari"} = useParams()

    return(
        <div className="welcome">
       <p> Welcome {name}!</p>
        <Age age="27"/>
       </div>
)}

