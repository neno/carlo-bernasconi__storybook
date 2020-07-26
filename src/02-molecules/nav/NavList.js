import React from 'react';
import Link from '../../01-atoms/link';

const NavList = ({ items }) => (
  <ul class='m-nav__list'>
    {items.map((item) => (
      <li key={encodeURIComponent(item.url)}>
        <Link
          classes={[`a-link a-link--nav ${item.active && 'a-link--active'}`]}
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default NavList;
