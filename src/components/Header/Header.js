import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header container d-flex">
      <div className="logo">Crypto <span>Watch</span></div>
      <div className="ms-auto d-flex">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/coins">Coins</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
