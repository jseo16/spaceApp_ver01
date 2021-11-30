import React from 'react';
import { generateMenu } from '../../utils/utils';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './SideMenu.module.css';

function SideMenu({ show, handleClose, menu }) {
  return (
    <Navbar.Offcanvas
      id='mobileNavbar'
      aria-labelledby='mobileNavbarLabel'
      placement='end'
      className='offcanvas'
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id='mobileNavbarLabel'>COSMOS DEV</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Nav className={`${styles.nav} justify-content-end flex-grow-1 pe-3`}>
          {generateMenu(menu, styles, handleClose)}
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
}

export default SideMenu;
