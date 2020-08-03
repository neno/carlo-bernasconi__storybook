import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Hero from '../index';
import { heroData } from './hero.data';

export default {
  title: '02-Molecules/Hero',
};

export const Default = () => renderToStaticMarkup(
  <Hero
    imageData={heroData.img}
    title={heroData.title}
    text={heroData.text}
    breadcrumbItems={heroData.breadcrumbItems} />
);
