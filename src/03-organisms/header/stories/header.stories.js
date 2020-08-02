import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Header from '../index';

export default {
  title: '03-Organisms/Header',
};

export const Desktop = () =>
  renderToStaticMarkup(<Header />);


export const MobileInactive = () =>
  renderToStaticMarkup(<Header isActive={'false'} />);



export const MobileActive = () =>
  renderToStaticMarkup(<Header isActive={'true'} />);
