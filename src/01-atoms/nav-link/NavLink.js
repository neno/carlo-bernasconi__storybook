import React from 'react';

const NavLink = ({ title, url, active }) => (
  <a
    className={active ? 'a-nav-link a-nav-link--active' : 'a-nav-link'}
    href={url}
  >
    {title}
  </a>
);

export default NavLink;
