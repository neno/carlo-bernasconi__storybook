import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import OverviewTeasers from '../index';
import { teaserData } from './overview-teasers.data';

export default {
  title: '03-Organisms/OverviewTeasers',
};

export const Desktop = () =>
  renderToStaticMarkup(<OverviewTeasers teasers={teaserData} />);
