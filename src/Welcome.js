import React from "react";
import { useParams } from "react-router-dom";
import { Age } from "./Age";
import { Link } from "react-router-dom";

export function Welcome() {
  const { name = "Yari" } = useParams();

  return (
    <div className="welcome">
      <p> Welcome {name}!</p>
      <Age age="27" />
      <Link to="counter"><h3 className="text-xl"> vai al counter</h3></Link>
    </div>

  );
}
