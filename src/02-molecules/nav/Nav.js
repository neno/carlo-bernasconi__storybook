import React from 'react';
import NavList from './NavList';

const Nav = ({ items }) => (
  <nav className='m-nav'>
    <NavList items={items} />
  </nav>
);

export default Nav;
