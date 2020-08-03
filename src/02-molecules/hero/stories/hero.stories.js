import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Hero from '../index';
import { heroData } from './hero.data';
import { pictureData } from '../../../01-atoms/picture/stories/picture.data';

export default {
  title: '02-Molecules/Hero',
};

export const Default = () => renderToStaticMarkup(
  <Hero
    data={pictureData}
    title={heroData.title}
    text={heroData.text}
    breadcrumbItems={heroData.breadcrumbItems} />
);
