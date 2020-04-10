import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/bento_logo.png";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
