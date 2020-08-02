import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LanguageSelector from '../index';
import {languagesData} from './language-selector.data'

export default {
  title: '02-Molecules/LanguageSelector',
  excludeStories: /.*Data$/,
};



export const collapsed = () =>
  renderToStaticMarkup(
    <LanguageSelector
      languages={languagesData}
      currentLang='DE'
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
