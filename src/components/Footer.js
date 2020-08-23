import React from "react";

import { Phone, Mail, MapPin } from 'react-feather';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <a href="tel:+1 325-271-9971">
        <Phone size={17} /> {`\t\t+1 (325) 271-9971`}
      </a>
      <p className="separator">|</p>
      <a href="mailto:lizziehv11@gmail.comm">
        <Mail size={17} /> {`\t\tlizziehv11@gmail.com`}
      </a>
      <p className="separator">|</p>
      <p>
        <MapPin size={17} />{`\t\tHanover, NH`}
      </p>
    </div>
  </div>
);

Footer.defaultProps = {
  siteTitle: ``,
  image: null,
}

export default Footer;
