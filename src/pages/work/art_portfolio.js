import React, { useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavBar from '../../components/NavBar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Gallery from 'react-photo-gallery';


const siteTitle = `Art Portfolio`;
const siteDescription = `These are some of the pieces I've worked on during my free time . . .`;

const photos = [
  {
    src: require("../../static/images/drawings/renaissance.jpg"),
    width: 3,
    height: 2
  },
  {
    src: require("../../static/images/drawings/mimi-portrait.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../../static/images/drawings/arya-portrait.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../../static/images/drawings/max-portrait.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../../static/images/drawings/flowers.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("../../static/images/drawings/renaissance2.jpg"),
    width: 4,
    height: 3
  },
  {
    src: require("../../static/images/drawings/keys.jpg"),
    width: 3,
    height: 4
  },
]

const ArtPortfolio = () => {
  const [curtainDown, setCurtainDown] = useState(false);

  const toggleCurtainDown = () => {
    setCurtainDown((prev) => !prev)
  }

  return (
      <Container fluid className="no-padding">
      <Row>
        <NavBar active="Work" onCollapse={toggleCurtainDown} />
        {!curtainDown &&
          <Col xs={12} sm={8} >
            <Banner siteTitle={siteTitle} siteDescription={siteDescription} />
            <Gallery photos={photos} />
            <Row>
              <div className="citations">
                <h2>Honors/Citations</h2>
                <p>
                  "Lizzie Hernandez Videa '22 - is commended for excellence in Studio Art 15, Drawing I. Her drawings were of consistently high quality both in conception and execution. Lizzie has a remarkable ability to transform drawing media into unique surfaces, lights, and forms. Her final series of drawings were large portraits of her friends who are international students. Lizzie shows great potential as an artist." ~ Pamela Thompson, Studio Art professor
                </p>
              </div>
            </Row>
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
