import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TopMenu.module.css';
import Nav from 'react-bootstrap/Nav';

function TopMenu() {
  return (
    <Nav className={styles.nav}>
      <Link to='/'>Home</Link>
      <Link to='spacecraft'>Spacecraft</Link>
      <Link to='astronauts'>Astronauts</Link>
    </Nav>
  );
}

export default TopMenu;
