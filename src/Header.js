import React from "react";
import logo from "./assets/images/boun_logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div id="header">
      <div className="topbanner">
        <div className="centerblock">
          <div className="logo">
            <a href="/">
              <img
                src={logo}
                width="500"
                height="72"
                title="Ana Sayfa"
                alt="Ana Sayfa"
              />
            </a>
          </div>
        </div>
      </div>

      <div id="menubar">
        <div className="centerblock">
          <div className="leftblock">
            <span></span>
          </div>

          <div className="rightblock">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
