import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { navItems } from '../../../data';
import Nav from './Nav';

export default {
  title: '02-Molecules/Nav',
};

export const Default = () => renderToStaticMarkup(<Nav items={navItems()} />);

export const WithActiveItem = () =>
  renderToStaticMarkup(<Nav items={navItems('Kompetenzen')} />);
