import React from 'react';
import { Link } from 'react-router-dom';

import useNav from '../../hooks/useNav';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from './Navigation.module.css';
import { HexagonHalf } from 'react-bootstrap-icons';

import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';

function Navigation() {
  const isMobileView = useNav();

  return (
    <header>
      <Navbar expand='sm'>
        <Container fluid='sm' className='py-3'>
          <Navbar.Brand className={styles.brand}>
            <Link to='/'>
              <HexagonHalf className='brand' /> COSMOS DEV
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='mobileNavbar'
            className={styles.toggle}
          />
          {isMobileView ? <SideMenu /> : <TopMenu />}
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
