import React from 'react';
import NavLink from '../../01-atoms/nav-link/NavLink';

const NavList = ({ items }) => (
  <ul class='m-nav__list'>
    {items.map((item) => (
      <li key={encodeURIComponent(item.url)}>
        <NavLink title={item.title} url={item.url} active={item.active} />
      </li>
    ))}
  </ul>
);

export default NavList;
