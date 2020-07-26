import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LanguageSelector from './index';

export default {
  title: '02-Molecules/LanguageSelector',
  excludeStories: /.*Data$/,
};

export const languagesData = [
  { de: 'Deutsch' },
  { fr: 'Français' },
  { it: 'Italiano' },
];

export const collapsed = () =>
  renderToStaticMarkup(
    <LanguageSelector
      languages={languagesData}
      currentLang='DE'
      status='collapsed'
    />
  );

export const expanded = () =>
  renderToStaticMarkup(
    <LanguageSelector
      languages={languagesData}
      currentLang='DE'
      status='expanded'
    />
  );
