import React from 'react';
import Link from '../../01-atoms/link';

const NavList = ({ items }) => (
  <ul class='m-nav__list' role='menubar'>
    {items.map((item) => (
      <li key={encodeURIComponent(item.url)} role='menuitem'>
        <Link
          classes={[`a-link a-link--nav ${item.active && 'a-link--active'}`]}
          attr={{ 'aria-current': item.active && 'page' }}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavList;
