import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';

const siteTitle = `Projects`;
const siteDescription = `A few projects that I've collaborated on . . .`;

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
