import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header container d-flex">
      <div className="logo"><Link to="/">Crypto <span>Watch</span></Link></div>
      <div className="ms-auto d-flex">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/coins">Coins</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
