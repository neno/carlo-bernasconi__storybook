import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import './icon.scss';
import Icon from './index';

export default {
  title: '01 - Atoms/Icons',
};

export const IconArrowLeft = () =>
  renderToStaticMarkup(<Icon name='arrow-left' />);
