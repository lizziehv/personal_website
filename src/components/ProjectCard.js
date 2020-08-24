import PropTypes from "prop-types"
import React from "react";

const ProjectCard = ({ title,  img, description, link }) => (
  <Col xs={12} sm={6} lg={4} >
    <a href={link}>
      <div className="project-card">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  </Col>  
);

ProjectCard.defaultProps = {
  title: ``,
  img: null,
  description: ``,
  link: ``
}

export default ProjectCard;
