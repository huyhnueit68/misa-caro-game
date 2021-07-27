import React from "react";
import { titleGame } from "../../@Types/Resources"

export default function Header() {
  return (
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light bg-faded">
        <a className="navbar-brand" href="/">{titleGame.title}</a>
        </nav>
      </div>
  );
}
