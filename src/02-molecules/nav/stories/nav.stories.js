import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { navItems } from './nav.data';
import Nav from '../index';

export default {
  title: '02-Molecules/Nav',
};

export const Default = () => renderToStaticMarkup(<Nav items={navItems()} />);

export const WithActiveItem = () =>
  renderToStaticMarkup(<Nav items={navItems('Kompetenzen')} />);

export const Mobile = () =>
  renderToStaticMarkup(<Nav items={navItems()} />);

export const MobileActive = () =>
  renderToStaticMarkup(<Nav items={navItems()} />);
