import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './TopMenu.module.css';
import Nav from 'react-bootstrap/Nav';

function TopMenu() {
  return (
    <Nav className={styles.nav}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to='spacecraft'
      >
        Spacecraft
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : '')}
        to='astronauts'
      >
        Astronauts
      </NavLink>
    </Nav>
  );
}

export default TopMenu;
