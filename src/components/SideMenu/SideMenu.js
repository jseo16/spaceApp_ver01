import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './SideMenu.module.css';

function SideMenu({ show, handleClose }) {
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
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={handleClose}
          >
            Home
          </NavLink>
          <NavLink
            to='spacecraft'
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={handleClose}
          >
            Spacecraft
          </NavLink>
          <NavLink
            to='astronauts'
            className={({ isActive }) => (isActive ? styles.active : '')}
            onClick={handleClose}
          >
            Astronauts
          </NavLink>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
}

export default SideMenu;
