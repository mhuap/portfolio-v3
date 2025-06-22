import React from "react";
import BracketButton from "./BracketButton";
import "../styles/nav.scss";

function Layout ({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <nav className="nav">
        <a className="header-buttons face-icon"></a>
        <BracketButton
          className="header-buttons"
          text="About"
          nav/>
      </nav>
      <div className="layout">
        {children}
      </div>
    </>
  )
}

export default Layout;
