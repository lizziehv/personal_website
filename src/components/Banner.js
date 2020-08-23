import PropTypes from "prop-types"
import React from "react";

const Banner = ({ siteTitle,  siteDescription }) => (
  <div className="banner">
    <h2 className="title">{siteTitle}</h2>
    <p className="description">{siteDescription}</p>
  </div>  
);

Banner.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Banner;
