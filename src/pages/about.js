import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const siteTitle = `About me`;
const siteDescription = '';

// const renderStars = (n) => {
//   let stars = [];
//   for(let i = 0; i < 5; i++){
//     stars.push(<Star size={20} className={i < n ? "star-checked" : "star-unchecked"}/>)
//   }
//   return (
//     <div>
//       {stars}
//     </div>
//   );
// }

const AboutPage = () => (
  <div className="page">
    <Row>
      <NavBar />
      <Col xs={12} sm={8}>
        <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
        <Row>
          <Col xs={12} sm={4}>
            <div className="profile-container">
              <img src={(require("../static/images/profile.jpg"))} alt="" className="profile" />
            </div>
          </Col>
          <Col xs={12} sm={8}>
            <div className="about-description">
              <p>I'm a junior at Dartmouth College, originally from Latin America. I am double majoring in Math and Computer Science and interested in Software Enginnering and quantitative fields.</p>
              <p>I love to travel, think about complex math problems, and play volleyball!</p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} sm={{size: 3, offset: 0}}>
            <div className="about-section">
              <h2 style={{textAlign: 'left'}}>
                Languages
              </h2>
              <ul>
                <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>Bash/Unix</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={{size: 5, offset: 0}}>
            <div className="about-section">
              <h2 style={{textAlign: 'left'}}>
                Achievements
              </h2>
              <ul>
                <li>Rufus Choates Scholar (top 5% of class)</li>
                <li>Nexus Fellow at D.E. Shaw Group</li>
                <li>IMO participant</li>
                <li>Honduran Math Olympiad Silver Medal</li>
                <li>High School Valedictorian</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={{size: 4, offset: 0}}>
            <div className="about-section">
              <h2 style={{textAlign: 'left'}}>
                Activities
              </h2>
              <ul>
                <li>Association for Women in Math</li>
                <li>Coder Dojo</li>
                <li>Women in Computer Science</li>
                <li>Interact Tegucigalpa Sur</li>
                <li>Rewriting the Code</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={{size: 3, offset: 0}}>
            <div className="about-section">
              <h2 style={{textAlign: 'left'}}>
                Other skills & interests
              </h2>
              <ul>
                <li>Spanish (native)</li>
                <li>Italian (intermediate)</li>
                <li>UI/UX</li>
                <li>studio art</li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Footer />
        </Row>
      </Col>
    </Row>
  </div>
)

export default AboutPage;
