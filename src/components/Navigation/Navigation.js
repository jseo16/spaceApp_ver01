import React, { useState } from 'react';
import useNav from '../../hooks/useNav';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Home from '../../screens/Home/Home';
import Spacecraft from '../../screens/Spacecraft/Spacecraft';
import Astronauts from '../../screens/Astronauts/Astronauts';
// import styles from './Navbar.module.css';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';

function Navigation() {
  const { isMobileView } = useNav();

  return (
    <header>
      <Navbar expand='sm'>
        <Container>
          <Navbar.Brand href='#'>COSMOS DEV</Navbar.Brand>
          <Navbar.Toggle aria-controls='mobileNavbar' />
          <TopMenu isMobileView={isMobileView} />
          <SideMenu isMobileView={isMobileView} />
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
