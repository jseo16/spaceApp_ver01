import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useNav from '../../hooks/useNav';
import SideMenu from '../SideMenu/SideMenu';
import TopMenu from '../TopMenu/TopMenu';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { HexagonHalf } from 'react-bootstrap-icons';
import styles from './Navigation.module.css';

function Navigation({ menu }) {
  const isMobileView = useNav();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            onClick={handleShow}
          />

          {isMobileView ? (
            <SideMenu
              show={show}
              menu={menu}
              handleClose={handleClose}
              className={styles.sideNav}
            />
          ) : (
            <TopMenu menu={menu} />
          )}
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
