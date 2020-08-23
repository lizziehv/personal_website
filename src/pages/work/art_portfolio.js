import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';

const siteTitle = `Art Portfolio`;
const siteDescription = 'Here are some of the coding projects I have done in classes or just for fun!';

const AboutPage = () => (
  <div className="page">
    <Row>
      <NavBar showWork />
      <Col xs={12} sm={8}>
        <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
      </Col>
    </Row>
  </div>
)

export default AboutPage;
