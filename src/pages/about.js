import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/main.scss";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

const siteTitle = `About me`;
const siteDescription = '';

const IndexPage = () => (
  <Container fluid>
    <Row>
      <NavBar />
      <Col sm={9}>
        <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
      </Col>
    </Row>
  </Container>
)

export default IndexPage;
