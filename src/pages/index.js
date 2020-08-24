import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer'

const siteTitle = `Hi, I'm Lizzie!`;
const siteDescription = 'I am a Dartmouth College student studying Computer Science and Mathematics. I am passionate about technology, math, and art. Scroll down to see more!';

const IndexPage = () => {
  const [curtainDown, setCurtainDown] = useState(false);

  const toggleCurtainDown = () => {
    setCurtainDown((prev) => !prev)
  }

  return (
      <Container fluid className="no-padding">
      <Row>
        <NavBar active="Work" onCollapse={toggleCurtainDown}/>
        {!curtainDown &&
          <Col xs={12} sm={8} >
            <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
            <Row>
              <Card title="Code Samples" image={require("../static/images/code-samples.jpg")} link="/work/code_samples/" />
              <Card title="Projects" image={require("../static/images/project-cover.jpg")} link="/work/projects/" />
            </Row>
            <Row>
              <Card title="Art Portfolio" image={require("../static/images/drawing-cover.png")} link="/work/art_portfolio/" />
            </Row>
            <Row>
              <Footer />
            </Row>
          </Col>
        }
      </Row>
    </Container>
  );
}

export default IndexPage;