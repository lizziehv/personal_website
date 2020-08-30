import React, { useState } from "react";
import { useWindowDimensions } from "./util";
import Col from 'react-bootstrap/Col';
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
        title: "Projects",
        link: "/work/projects"
      },
      {
        title: "Art Portfolio",
        link: "/work/art_portfolio"
      },
      {
        title: "Citations",
        link: "/work/citations"
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

const NavBar = ({ active, onCollapse }) => {
  const dimensions = useWindowDimensions();
  const width = dimensions ? dimensions.width : breakpt;
  const [curtainDown, setCurtainDown] = useState(false);
  // returned collapsed

  const toggleCurtainDown = () => {
    setCurtainDown((prev) => !prev);
    if(onCollapse) onCollapse();
  }

  if(width < breakpt){
    if(curtainDown){
      return(
        <div className="overlay">
          <div className="nav-bar" style={{display: 'flex', flexDirection: 'row'}}> 
            <h2 style={{textAlign: 'left', width: '75%', visibility: 'hidden'}}>Lizzie Hernandez</h2>
            <button onClick={toggleCurtainDown} className="closebtn">
              &times;
            </button>
          </div>
          <div className="overlay-content">
            {mainItems.map((item) => <Link to={item.link} className="nav-link">{item.title}</Link>)}
            {renderOtherLinks()}
            <div style={{width: "170px", marginTop: "100px"}}>
              <IconBox />
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <Col xs={12}>
          <div className="nav-bar" style={{display: 'flex', flexDirection: 'row'}}> 
            <h2 style={{textAlign: 'left', width: '75%'}}>Lizzie Hernandez</h2>
            <button onClick={toggleCurtainDown} className="icon">
              <Menu size={25} />
            </button>
          </div>
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
                {active === item.title && item.subItems &&
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
  active: '',
  onCollapse: null
}

export default NavBar;
