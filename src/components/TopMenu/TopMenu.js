import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function TopMenu({ isMobileView }) {
  return (
    <>
      {!isMobileView && (
        <Nav className='ms-auto'>
          <Link to='/'>Home</Link>
          <Link to='spacecraft'>Spacecraft</Link>
          <Link to='astronauts'>Astronauts</Link>
        </Nav>
      )}
    </>
  );
}

export default TopMenu;
