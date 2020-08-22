import React from "react";
import { GitHub, Instagram, Mail, Linkedin } from 'react-feather';

const socialLinks = [
  {
    icon: GitHub,
    link: 'https://github.com/lizziehv'
  },
  {
    icon: Mail,
    link: 'mailto:lizziehv11@gmail.com'
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFmQhz1Rt3njgAAAXQXyMYg3VjFU-tK7VcH-qpGAboteskQiLjdpgXUzn6qQTZaMcCYJ23JC-1QfvFWt1OcaGbGOVea_51yzuK5VVeqd-MHESom7L6mT5cKB-n1g2mGlRqfNXc=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Flizzie-hernandez-b958721a4%2F'
  },
  {
    icon: Instagram,
    link: 'https://www.instagram.com/lhvidea/'
  }
];

const IconBox = () => (
  <div className="icon-box">
    {socialLinks.map((obj) => (
      <a href={obj.link}>
        <div className="icon">
          <obj.icon  size={25}/>
        </div>
      </a>
    ))}
  </div>
);


export default IconBox;
