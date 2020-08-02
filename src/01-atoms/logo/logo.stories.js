import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Logo from './index';

export default {
  title: '01-Atoms/Logo',
};

export const Default = () => renderToStaticMarkup(<Logo />);
