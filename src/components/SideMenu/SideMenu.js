import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SideMenu({ isMobileView }) {
  return (
    <>
      {' '}
      {isMobileView && (
        <Navbar.Offcanvas
          id='mobileNavbar'
          aria-labelledby='mobileNavbarLabel'
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='mobileNavbarLabel'>COSMOS DEV</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Link to='/'>Home</Link>
              <Link to='spacecraft'>Spacecraft</Link>
              <Link to='astronauts'>Astronauts</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      )}
    </>
  );
}

export default SideMenu;
