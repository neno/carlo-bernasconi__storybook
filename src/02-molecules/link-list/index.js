import React from 'react';
import Link from '../../01-atoms/link';

const LinkList = ({ links, classes = [], linkClasses }) => (
  <ul className={`m-link-list ${classes.join(' ')}`}>
    {links && links.map(link => (
      <li key={encodeURIComponent(link.label)}>
        <Link url={link.url} classes={linkClasses}>{link.label}</Link>
      </li>
    ))}
  </ul>
);

export default LinkList;
