import React from 'react';
import { generateMenu } from '../../utils/utils';

import Nav from 'react-bootstrap/Nav';
import styles from './TopMenu.module.css';

function TopMenu({ menu }) {
  return <Nav className={styles.nav}>{generateMenu(menu, styles)}</Nav>;
}

export default TopMenu;
