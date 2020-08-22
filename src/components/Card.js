import React from "react";

import Col from 'react-bootstrap/Col';

const Card = ({ title,  image }) => (
  <Col m={4} xs={12}>
    <img src={image} alt="" />
  </Col>
);

Card.defaultProps = {
  siteTitle: ``,
  image: null,
}

export default Card;
