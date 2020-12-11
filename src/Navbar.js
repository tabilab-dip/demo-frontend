import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul id="mainmenu" className="nav">
        <li>
          <Link to="/sentiment">Sentiment Analysis</Link>
        </li>
        <li>
          <Link to="/morph-parser">Morphological Parsing</Link>
        </li>
        <li>
          <Link to="/about">Questions</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
