import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Breadcrumbs from './index';

export default {
  title: '02-Molecules/Breadcrumbs',
  excludeStories: /.*Data$/,
};

export const breadcrumbsData = [
  'Ratgeber',
  'Wie finde ich den perfekten Fussboden für mein Schloss?',
];

export const short = () =>
  renderToStaticMarkup(<Breadcrumbs items={breadcrumbsData} />);
