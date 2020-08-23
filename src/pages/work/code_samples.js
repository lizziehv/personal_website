import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
// import Card from '../../components/Card';
import Footer from '../../components/Footer';

const siteTitle = `Code Samples`;
const siteDescription = `Here are some of the coding projects I have done in classes or just for fun!`;

const CodeSamplesPage = () => {
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
              <Footer />
            </Row>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default CodeSamplesPage;
