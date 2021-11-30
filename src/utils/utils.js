import { NavLink } from 'react-router-dom';

export const generateMenu = (menu, styles, handler) => {
  return menu.map((name, index) => {
    return (
      <NavLink
        key={index}
        to={name}
        className={({ isActive }) => (isActive ? styles.active : '')}
        onClick={handler && handler}
      >
        {name}
      </NavLink>
    );
  });
};
