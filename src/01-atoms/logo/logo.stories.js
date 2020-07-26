import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Icon from '../icon';

export default {
  title: '01-Atoms/Logo',
};

export const Logo = () =>
  renderToStaticMarkup(
    <a className='a-logo' href='/' aria-label='Link to Homepage'>
      <Icon name='logo' />
    </a>
  );
