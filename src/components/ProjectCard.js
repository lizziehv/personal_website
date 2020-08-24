import React from "react";
import Col from 'react-bootstrap/Col';

const ProjectCard = ({ title,  img, description, link }) => (
  <Col xs={12} sm={6} lg={4} >
    <div style={{paddingTop: '20px', height: '100%'}}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="project-card">
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  </Col>  
);

ProjectCard.defaultProps = {
  title: ``,
  img: null,
  description: ``,
  link: ``
}

export default ProjectCard;
