import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Icon from '../icons';

export default {
  title: '01-Atoms/Logo',
};

export const Logo = () =>
  renderToStaticMarkup(
    <div className='a-logo'>
      <Icon name='logo' />
    </div>
  );
