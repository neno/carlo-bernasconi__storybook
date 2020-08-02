import React from 'react';
import NavList from './NavList';

const Nav = ({ items }) => (
  <nav className='m-nav' aria-label='Main Navigation'>
    <NavList items={items} />
  </nav>
);

export default Nav;
