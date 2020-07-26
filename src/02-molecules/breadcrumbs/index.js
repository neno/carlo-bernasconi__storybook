import React from 'react';
import Link from '../../01-atoms/link';
import Icon from '../../01-atoms/icon';

const Breadcrumbs = ({ items = [] }) => (
  <nav aria-label='Breadcrumbs' className='m-breadcrumbs'>
    <Link
      classes={[
        'a-link a-link--icon m-breadcrumbs__link m-breadcrumbs__link--home',
      ]}
    >
      <Icon name='home' />
    </Link>
    <ol className='m-breadcrumbs__list'>
      {items.map((item, i) => (
        <li key={i}>
          <Icon name='arrow-right' />
          <Link classes={['a-link m-breadcrumbs__link']}>{item}</Link>
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
