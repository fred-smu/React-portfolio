import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href=".">Frederick Clayton Guthrie III</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li id="NavAbout">
            
              <Link to="/React-portfolio"
              className={                                   
                window.location.pathname === "/" || window.location.pathname === "http://localhost:3000/React-portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }>About</Link>

          </li>
          {/* <li id="NavContact" >
           
            <Link to="/contact"
            className={
              window.location.pathname === "/contact" || window.location.pathname === "http://localhost:3000/contact"
              ? "nav-link active"
              : "nav-link"
            }>Contact</Link>
          </li> */}
          <li  id="NavPortfolio">
           <Link to="/portFolio"
            className={
              window.location.pathname === "/portFolio" || window.location.pathname === "http://localhost:3000/portFolio" 
                ? "nav-link active"
                : "nav-link"
            }> PortFolio </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
