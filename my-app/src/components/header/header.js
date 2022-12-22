/*importing css and react*/
import React from "react";
import "./header.css";

/*creating a header based on the words passed through from other files*/
export default function Header(props) {
  return (
    <header className="header">
      <p>
        <strong>{props.title}</strong>
      </p>
    </header>
  );
}
