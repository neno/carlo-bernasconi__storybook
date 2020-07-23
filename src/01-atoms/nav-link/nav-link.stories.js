import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import NavLink from './NavLink';

export default {
  title: '01-Atoms/NavLink',
};

export const Default = () =>
  renderToStaticMarkup(<NavLink title='Kompetenzen' url='#' />);

export const Active = () =>
  renderToStaticMarkup(<NavLink title='Kompetenzen' url='#' active={true} />);
