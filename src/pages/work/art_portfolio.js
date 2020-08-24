import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';

const siteTitle = `Art Portfolio`;
const siteDescription = `These are some of the pieces I've worked on during my free time . . .`;

const ArtPortfolio = () => {
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
            <Gallery />
            <p>
              "Lizzie Hernandez Videa 22 - is commended for excellence in Studio Art 15, Drawing I. Her drawings were of consistently high quality both in conception and execution. Lizzie has a remarkable ability to transform drawing media into unique surfaces, lights, and forms. Her final series of drawings were large portraits of her friends who are international students. Lizzie shows great potential as an artist." ~ Pamela Thompson, Studio Art professor
            </p>
            <Row>
              <Footer />
            </Row>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default ArtPortfolio;
