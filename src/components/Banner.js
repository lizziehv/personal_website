import PropTypes from "prop-types"
import React from "react";

const Banner = ({ siteTitle,  siteDescription }) => (
  <div className="banner">
    <h1>{siteTitle}</h1>
    <h2>{siteDescription}</h2>
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
