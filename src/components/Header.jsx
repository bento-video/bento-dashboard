import React from "react";
import logo from "../images/bento_logo.png";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src={logo} />
      </div>
    </header>
  );
};

export default Header;
