import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/main.scss";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

const siteTitle = `About me`;
const siteDescription = '';

const AboutPage = () => (
  <div className="page">
    <Row>
      <NavBar />
      <Col xs={12} sm={8}>
        <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
      </Col>
    </Row>
  </div>
)

export default AboutPage;