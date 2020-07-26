import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { navItems } from '../../../data';
import Pagination from './index';

export default {
  title: '02-Molecules/Pagination',
};

export const prevNex = () =>
  renderToStaticMarkup(<Pagination currentPage='1' />);

export const short = () =>
  renderToStaticMarkup(<Pagination pages={['1', '2', '3']} currentPage='1' />);

export const long = () =>
  renderToStaticMarkup(
    <Pagination pages={['…', '8', '9', '10', '…']} currentPage='9' />
  );
