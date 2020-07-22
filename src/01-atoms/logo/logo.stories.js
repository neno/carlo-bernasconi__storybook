import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Icon from '../icons';

export default {
  title: '01-Atoms/Logo',
};

export const Logo = () =>
  renderToStaticMarkup(
    <div role='banner' className='a-logo'>
      <a href='/' aria-label='Link to Homepage'>
        <Icon name='logo' />
      </a>
    </div>
  );
