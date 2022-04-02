import React from "react";
import "./Footer.css";
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-links">
        <a className="linkedin" target="blank" href="https://www.linkedin.com/in/nurmdrafi/">
          <BsLinkedin></BsLinkedin>
        </a>
        <a className="github" target="blank" href="https://github.com/nurmdrafi">
          <BsGithub></BsGithub>
        </a>
        <a className="twitter" target="blank" href="https://twitter.com/MohamodRafi">
          <BsTwitter></BsTwitter>
        </a>
        <a className="facebook" target="blank" href="https://www.facebook.com/nafis.alrafe/">
          <BsFacebook></BsFacebook>
        </a>
      </div>
      <p>All Rights Reserved By © Crypto Watch | 2022-2026</p>
    </div>
  );
};

export default Footer;
