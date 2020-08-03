import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Picture from '../index';
import { pictureData } from './picture.data';

export default {
  title: '01-Atoms/Pictures',
};

export const image = () => renderToStaticMarkup(<Picture {...pictureData} />);
