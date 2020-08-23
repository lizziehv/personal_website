import React from "react";
import { navigate } from "gatsby";

import Col from 'react-bootstrap/Col';

const Card = ({ title,  image, link }) => {
  return (
    <Col xs={12} sm={6} className="card-container">
      <button className="portfolio-card" onClick={() => navigate(link)}>
        <img src={image} alt="" class="image" />
        <div className="overlay">
          <div className="text">{title}</div>
        </div>
      </button>
    </Col>
  );

}

Card.defaultProps = {
  siteTitle: ``,
  image: null,
}

export default Card;
