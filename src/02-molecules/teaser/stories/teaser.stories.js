import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Teaser from '../index';
import { teaserData } from './teaser.data';

export default {
  title: '02-Molecules/Teaser',
};

export const Default = () => renderToStaticMarkup(<Teaser imageData={teaserData.img} title={teaserData.title} />);
