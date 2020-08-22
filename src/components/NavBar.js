import React, { useState } from "react";
import { useWindowDimensions } from "./util";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'gatsby';
import { Menu } from 'react-feather';
import IconBox from './IconBox';
import Resume from '../pages/resume.pdf';

const breakpt = 770;

const mainItems = [
  {
    title: "About Me",
    link: "/about",
    subItems: null
  },
  {
    title: "Work",
    link: "/",
    subItems: [
      {
        title: "Code Samples",
        link: "/work/code_samples"
      }, 
      {
        title: "Project",
        link: "/work/projects"
      },
      {
        title: "Art Portfolio",
        link: "/work/code_samples"
      }
    ]
  }
];

const renderOtherLinks = () => (
  <>
    <a href = {Resume} target = "_blank" rel="noreferrer" className="nav-link">Resume</a>
    <a href = {`mailto:lizziehv11@gmail.com`} className="nav-link">Contact</a>
  </>
);

const NavBar = ({ showWork }) => {
  const { width } = useWindowDimensions();
  const [curtainDown, setCurtainDown] = useState(false);
  // returned collapsed

  if(width < breakpt){
    if(curtainDown){
      return(
        <div id="myNav" style={{width: '100%'}} class="overlay">
          <button class="closebtn" onClick={() => setCurtainDown(false)}>&times;</button>
          <div class="overlay-content">
            {mainItems.map((item) => <Link to={item.link} className="nav-link">{item.title}</Link>)}
          </div>
        </div>
      );
    } else {
      return(
        <Col xs={12}>
          <Row>
            <h2>Lizzie Hernandez</h2>
            <button onClick={() => setCurtainDown(true)}>
              <Menu size={25} />
            </button>
          </Row>
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
            {mainItems.map((item) => (
              <>
                <Link to={item.link} className="nav-link">{item.title}</Link>
                {showWork && item.subItems &&
                  <>
                    {item.subItems.map((subIt) => (
                      <Link to={subIt.link} className="nav-link nav-link2">{subIt.title}</Link>
                    ))}
                  </>
                }
              </>
            ))}
            {renderOtherLinks()}
          </div>
          <IconBox />
        </div>
      </Col>
    );
  }
}

NavBar.defaultProps = {
  showWork: false,
}

export default NavBar;
