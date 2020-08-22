import React, { useState } from "react";
import { useWindowDimensions } from "./util";
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';
import { GitHub, Instagram, Mail, Linkedin, Menu } from 'react-feather';

const NavBar = ({ showWork }) => {
  const { width } = useWindowDimensions();
  const [curtainDown, setCurtainDown] = useState(false);
  // returned collapsed

  if(width < 1000){
    if(curtainDown){
      return(
        <div id="myNav" style={{width: '100%'}} class="overlay">
          <button class="closebtn" onClick={() => setCurtainDown(false)}>&times;</button>
          <div class="overlay-content">
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/about" className="nav-link">Work</Link>
            <Link to="/about" className="nav-link">Resume</Link>
            <Link to="/about" className="nav-link">Contact</Link>
          </div>
        </div>
      );
    } else {
      return(
        <Col xs={12}>
          <h2>Lizzie Hernandez</h2>
          <button onClick={() => setCurtainDown(true)}>
            <Menu size={25} />
          </button>
        </Col>
      );
    }
  } else {
    return(
      <Col sm={3}>
        <div className="side-bar">
          <h1>
            Lizzie Hernandez
          </h1>
          <div className="link-container">
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/" className="nav-link">Work</Link>
            {showWork &&
            <>
              <Link to="/about" className="nav-link nav-link2">Code Samples</Link>
              <Link to="/about" className="nav-link nav-link2">Projects</Link>
              <Link to="/about" className="nav-link nav-link2">Art Portfolio</Link>
            </>
            }
            <Link to="/about" className="nav-link">Resume</Link>
            <Link to="/about" className="nav-link">Contact</Link>
          </div>
          <GitHub />
          <Instagram />
          <Linkedin />
          <Mail />
        </div>
      </Col>
    );
  }
}

NavBar.defaultProps = {
  showWork: false,
}

export default NavBar;
