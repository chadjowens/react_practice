import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#333',
    padding: '10px 0',
    zIndex: 1000
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
        <li><Link to="/schedule" style={linkStyle}>Schedule Call</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;